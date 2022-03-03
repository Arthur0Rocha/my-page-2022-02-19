import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arthur Rocha | Software {'&'} Engenharia</title>
        <meta name="description" content="Página de contato de Arthur Rocha | Software & Engenharia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Contato</h1>
        <p>E-mail: ar_d_rocha@hotmail.com</p>
        <p>WhatsApp: (11) 97764-7226</p>
      </main>

      <footer className={styles.footer}>
          Arthur Rocha
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="Ícone Logo" width={16} height={16} />
          </span>
          Software {'&'} Engenharia
      </footer>
    </div>
  )
}

export default Contact
