import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import App from './components/App';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Job-Hunter</title>
        <meta name="description" content="job hunter application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <App />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by DJ Skittles{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
