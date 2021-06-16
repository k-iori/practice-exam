import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

//宣言
export default function Home() {
  const [mondaibun, setTime] = useState(null)
  const [choice_a, mondai_1] = useState(null)
  const [choice_b, mondai_2] = useState(null)
  const [choice_c, mondai_3] = useState(null)
  const [choice_d, mondai_4] = useState(null)
  const [time, settimer] = useState(null)
  useEffect(() => {

    //問題文をセットするAPI
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => {
        setTime(data[0].mondaibun)
        mondai_1(data[0].hyouji_mei)
        mondai_2(data[1].hyouji_mei)
        mondai_3(data[2].hyouji_mei)
        mondai_4(data[3].hyouji_mei)

        console.log(data)
      });setInterval(() =>
      {
        count++;

        if(count == 60)
        {
          minutes += 1;
        }
        if(count < 60)
        {
          if(minutes == 0)
          {
            settimer(count + "秒");
          }
          else
          {
            settimer(minutes + "分" + count + "秒");
          }

        }
        else
        {
          count = 0;
          settimer(minutes + "分" + count + "秒");
        }
      },1000);

  }, [])

  //経過時間処理
  var count = 0;
  var minutes = 0;

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8"/>
        <title>模擬試験サイト</title>
      </Head>
  <body>

        <main className={styles.main}>
          <h2 className={styles.title}>
            実教Web模擬試験システム
          </h2>

          <div class="item01">
          <aside>
            <h4>メニュー</h4>
            <ul>
                <li><span>実教出版TOPページ</span></li>
                <li>教師用ログインページ</li>
                <li><span>試験中止</span></li>
                <li class="last_child">受験履歴</li>
            </ul>
        </aside>
          </div>

          <div class="item02">
            <h2>IT パスポート試験2013秋　テクノロジ系(1/35)</h2>
          </div>
            <p>問題</p>
          <div >{mondaibun}</div>
          
          <p>ア{choice_a}</p>
          <p>イ{choice_b}</p>
          <p>ウ{choice_c}</p>
          <p>エ{choice_d}</p>
          <div id="time">
            
            <p>経過時間:{time}</p>
          </div>
  
          <p className={styles.description}></p>
  
          </main>
  
        <footer>
          <p>(c) 2011 Jikkyo Shuppan Co.Ltd.All rights reserved</p>
        </footer>
  </body>
      </div>
  )
}
