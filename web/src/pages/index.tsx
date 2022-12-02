
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import styles from '../styles/pages/Hero.module.scss'
import UnionDegrade from '../assets/SVGS/UnionDegrade'
import SlacksIcons from '../assets/SVGS/SlacksIcons'



export default function Home() {


  return (
    <>
      <Head>
        <title>Jefferson Charlles</title>
        <meta name="description" content="Portfolio Jefferson Charlles" />

      </Head>
      <Header />
      <main className={styles.container} >
        <section className={styles.containerHero} data-aos="fade-up" data-aos-delay="200">

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

          <div className={styles.container_item2} data-aos="fade-up" data-aos-delay="0">
            <UnionDegrade />
            <div>
              <SlacksIcons />
            </div>
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
