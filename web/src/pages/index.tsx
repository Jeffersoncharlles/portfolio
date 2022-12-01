import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from './index.module.scss'
import UnionDegrade from '../assets/SVGS/UnionDegrade'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jefferson Charlles</title>
        <meta name="description" content="Portfolio Jefferson Charlles" />

      </Head>
      <Header />
      <main className={styles.container} >
        <section className={styles.containerHero}>
          <div className={styles.container_item1}>
            <h1>Software Analyst</h1>
            <h4>Jefferson Charlles</h4>
            <p>
              code beautifully things and l love what I do
              I'm always learning. I love technology, energy
              drinks and applying knowledge to solve problem
            </p>
            <button>
              Chat me
            </button>
          </div>

          <div className={styles.container_item2}>
            <UnionDegrade />
          </div>
        </section>
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
