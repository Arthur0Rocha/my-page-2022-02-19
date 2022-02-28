import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../../styles/Blog.module.css'
import Header from '../../components/blog/header'
import Footer from '../../components/blog/footer'

const BlogHome: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arthur Rocha | Software {'&'} Engenharia</title>
        <meta name="description" content="Blog de Arthur Rocha | Software & Engenharia. Informações sobre tecnologia, ciência de dados, negócios, healthcare e outros." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header pageSlug='home'></Header>

      <main className={styles.main}>
        <h1>Blog!</h1>
      </main>

      <Footer/>
    </div>
  )
}

export default BlogHome
