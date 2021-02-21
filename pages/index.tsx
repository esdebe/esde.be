import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Logo from '@components/Logo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Blog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <Logo />
        <h1 className={styles['header-1']}>Sendi DB - Personal Blog</h1>
      </div>
    </div>
  )
}
