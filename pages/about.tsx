import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arthur Rocha | Software {'&'} Engenharia</title>
        <meta name="description" content="Página sobre Arthur Rocha | Software & Engenharia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Sobre</h1>
        <p>
          Arthur Rocha, engenheiro e mestre formado pela Universidade Federal de Pernambuco (UFPE) e Doutorando em Radiologia Médica na Universidade de São Paulo (USP).
        </p>
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

export default About
