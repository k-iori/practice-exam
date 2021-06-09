import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { monokaiSublime } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Home() {
  const [time, setTime] = useState(null)
  useEffect(() => {
    fetch('/api/time')
      .then(res => res.json())
      .then(data => {
        setTime(data.current_timestamp)
      })

  }, [])

  //経過時間を保持するための変数定義
  var times = null;
  //タイマーカウント用を保持するための変数定義
  var count = 0;
  var minutes = 0;

  function event() {

    count++;

    if (count == 60) {
      minutes += 1;
    }
    if (count < 60) {
      if (minutes == 0) {
        document.getElementById('timer').innerHTML = count + "秒";
      }
      else {
        document.getElementById('timer').innerHTML = minutes + "分" + count + "秒";
      }

    }
    else {
      count = 0;
      document.getElementById('timer').innerHTML = minutes + "分" + count + "秒";
    }
  }
  //タイマー開始
  times = setInterval(event, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <title>模擬試験サイト</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          てすと
        </h1>

        <div id="time">
          <p>経過時間:<label id="timer" /></p>
        </div>

        <p className={styles.description}></p>

        <p>
          <strong>現在時間</strong>: {time}
        </p>

      </main>

      <footer>
      </footer>
    </div>
  )
}
