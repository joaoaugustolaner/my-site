import Head from 'next/head'
import Header from '../components/header'

import styles from '../styles/components/home/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome!</title>
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
    </>
  )
}
