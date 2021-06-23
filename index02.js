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
          <header>
            <div className={styles.title}>
              <h2>実教Web模擬試験システム</h2>
            </div>
          </header>

        <div className={styles.mondai}>
          <div className={styles.item01}>
            <h2>IT パスポート試験2013秋　テクノロジ系(1/35)</h2>
          </div>

          <section>
            <div className={styles.mondai01}>
            <p>問題1</p>
            </div>
            
          <div >{mondaibun}</div>
          
          <p>ア{choice_a}</p>
          <p>イ{choice_b}</p>
          <p>ウ{choice_c}</p>
          <p>エ{choice_d}</p>

          </section>

          <div className={styles.menu}>
            <asaide>
              <h3>メニュー</h3>
              <ul>
                <li><a href='https://www.jikkyo.co.jp/webmogi/'>➪TOPページ</a></li>
                <p>教員用ログインページ</p>
                <li><a href='https://www.jikkyo.co.jp/webmogi/exam/select/27'>➪試験中止</a></li>
                <p>受験履歴</p>
              </ul>
            </asaide>
          </div>
        </div>

        <div className={styles.kaitou}>
          <div className={styles.item02}>
            <table border='1' align='left'>
                <tr>
                    <th>問題No.</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>…</th>
                </tr>
                <tr>
                    <td>解答</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>チェック</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
      </div>

        <div className={styles.item03}>
          <table border="2">
          <input type="radio" name="sentaku" value="a"/> ア
          <input type="radio" name="sentaku" value="i" /> イ
          <input type="radio" name="sentaku" value="u" /> ウ
          <input type="radio" name="sentaku" value="e" /> エ
          </table>
        </div>
        <div className={styles.item04}>
          <input type="checkbox" name="ato" value="a"/> この問題を後で見直すためにチェックする
        </div>

        <div className={styles.item05}>
          <button type="tugi">次の問題へ➔</button>
        </div>
        
          <div id="time">
            <p>経過時間:{time}</p>
          </div>

          <div className={styles.item06}>
            <button type="saiten">採点する</button>
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
