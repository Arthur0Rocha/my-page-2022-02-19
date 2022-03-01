import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arthur Rocha | Software {'&'} Engenharia</title>
        <meta name="description" content="Software & Engenharia | Prostatic Artery Embolization | Portfólio | Blog tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Arthur Rocha
        </h1>
        <h1 className={styles.title}>
          <a href="/blog/">Software e Engenharia</a>
        </h1>
        
        <div className={styles.grid}>
          <a href="/about/" className={styles.card}>
            <h2>Sobre (About) &rarr;</h2>
            <p>Quem é Arthur Rocha</p>
          </a>

          <a href="/pae/" className={styles.card}>
            <h2>PAE &rarr;</h2>
            <p>Embolização das Artérias da Próstata. Tudo sobre.</p>
          </a>

          <a
            href="/blog/"
            className={styles.card}
          >
            <h2>Blog &rarr;</h2>
            <p>Conteúdos variados sobre software.</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h2>Contato &rarr;</h2>
            <p>
              Informações sobre contato.
            </p>
          </a>
        </div>
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

export default Home
