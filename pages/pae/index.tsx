import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '../../components/pae/footer'
import styles from '../../styles/PAE-Home.module.css'

const PAEHome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arthur Rocha | Embolização das Artérias da Próstata</title>
        <meta name="description" content="Informações sobre o procedimento de embolização das artérias da próstata. Anatomia, imagem, protocolo e software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>

      </header>

      <main className={styles.main}>
        
      </main>

      <Footer/>
      
    </div>
  )
}

export default PAEHome
