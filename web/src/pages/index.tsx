import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from './index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jefferson Charlles</title>
        <meta name="description" content="Portfolio Jefferson Charlles" />

      </Head>
      <Header />
      <main className={styles.container} >

      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = () => {


  return {
    props: {

    },
    revalidate: 60 * 60 * 24 //1 day
  }

}
