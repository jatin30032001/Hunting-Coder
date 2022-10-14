import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className={styles.main}> 
        <h1 className={styles.title}>
         Hunting Coder
        </h1>
<p className={styles.descrption}>
  A blog for hunting coders
</p>

<div className="blog">
  <h1> JavaScript 2022</h1>
  <p>This is the course of Javascript 2022</p>
</div>
      </main>

      
    </div>
  )
}
 