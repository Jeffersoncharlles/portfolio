
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import styles from '../styles/pages/hero.module.css'
import { AcademicEducation } from '../components/AcademicEducation'
import { MyProjects } from '../components/MyProjects'
import { Footer } from '../components/Footer'
import {menuHelpers } from '../utils/helpers'
import { useRouter } from 'next/router'
import Image from 'next/image'
import BackgroundHero from '../assets/bg-hero.png'
import { Hero } from '../components/Hero'



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
      <main className={styles.container} >

        <Hero id='home' />
        <AcademicEducation id="formation" />
        <MyProjects id="myproject" />

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
