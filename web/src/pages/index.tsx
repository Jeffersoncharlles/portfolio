
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import styles from '../styles/pages/Hero.module.scss'
import UnionDegrade from '../assets/SVGS/UnionDegrade'
import SlacksIcons from '../assets/SVGS/SlacksIcons'
import { Hello } from '../components/Hello'
import { AcademicEducation } from '../components/AcademicEducation'
import { MyProjects } from '../components/MyProjects'
import { Footer } from '../components/Footer'
import {menuHelpers } from '../utils/helpers'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BackgroundHero from '../assets/bg-hero.png'


export default function Home() {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>Jefferson Charlles</title>
        <meta name="description" content="Portfolio Jefferson Charlles" />

      </Head>
      <Header menu={menuHelpers} />
      <Image src={BackgroundHero} alt="" className='-z-20 absolute top-0 left-0 right-0 bottom-0 w-screen ' />
      {/* <BgHero className='-z-20 absolute top-0 left-0 right-0 bottom-0 w-screen ' /> */}
      <main className={styles.container} >

        <section className={styles.containerHero}  id='home'>

          <div className={styles.container_item1}>
            <h1 aria-label='Software Analyst'>Software Analyst</h1>
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

          <div className={styles.container_item2} >
            <UnionDegrade />
            <div className={styles.stacks} >
              <SlacksIcons />
            </div>
          </div>
        </section>
        <Hello id='about' />
        <AcademicEducation id="formation" />
        <MyProjects />
        <Footer />
      </main>


    </>
  )
}


export const getStaticProps: GetStaticProps = () => {


  return {
    props: {

    },
    revalidate: 60 * 60 * 24 //24horas
  }

}
