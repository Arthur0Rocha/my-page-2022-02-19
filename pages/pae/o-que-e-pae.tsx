import Head from 'next/head'

import Header from '../../components/pae/header'
import Footer from '../../components/pae/footer'

import styles from '../../styles/PAE-Home.module.css'

function OQueEPAE () {
    return (
        <div>
        <Head>
          <title>Arthur Rocha | Embolização das Artérias da Próstata</title>
          <meta name="description" content="Informações sobre o procedimento de embolização das artérias da próstata. Anatomia, imagem, protocolo e software." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header pageSlug='o-que-e-pae'/>
  
        <main className={styles.main}>
          
        </main>
  
        <Footer/>
        
      </div>
    )
}

export default OQueEPAE