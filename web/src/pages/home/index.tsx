import Head from 'next/head'
import { Header } from './Header'
import styles from './hero.module.css'
import { AcademicEducation } from './AcademicEducation'
import { Footer } from './Footer'
import { menuHelpers } from '../../utils/helpers'
import Image from 'next/image'
import BackgroundHero from '../../assets/bg-hero.png'
import { Hero } from './Hero'
import { CarrosselProject } from './CarrosselProject'

interface HomeProps{
  carousel: {
    slug: string;
    title: string;
    body: string;
    imageProjects: string;
 }[]
}

export default function Home({carousel }:HomeProps) {

  return (
    <>
      <Head>
        <title>Jefferson Charlles</title>
        <meta name="description" content="Portfolio Jefferson Charlles" />


        {/*<!--========== Open Graph / Facebook ===========-->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jefferdeveloper.com/" />
        <meta property="og:title" content="Portfolio Jefferson Charlles" />
        <meta property="og:description" content="Portfolio Jefferson Charlles." />
        <meta property="og:image" content="svg/metatag-jeffer.png" />

        {/*<!--=========== Twitter ===============-->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jefferdeveloper.com/" />
        <meta property="twitter:title" content="Portfolio Jefferson Charlles." />
        <meta property="twitter:description" content="Jefferson Charlles Portfolio mostrar tudo que ja foi feito por mim ate hoje e mostrando as melhores habilidades" />
        <meta property="twitter:image" content="svg/metatag-jeffer.png" />

      </Head>
      <Header menu={menuHelpers} />
      <Image src={BackgroundHero} alt="" className='-z-20 absolute top-0 left-0 right-0 bottom-0 w-screen ' />
      <main className={styles.container} >
        <Hero id='home' />
        <AcademicEducation id="formation" />
        <CarrosselProject id="myproject" carousel={carousel} />
      </main>
      <Footer />
    </>
  )
}
