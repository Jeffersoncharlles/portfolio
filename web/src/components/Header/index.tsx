import Image from "next/image";
import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg'
import { EnvelopeSimple, InstagramLogo, GithubLogo } from 'phosphor-react'
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props{
  menu?: {
    title: string
    linkUrl:string
  },
  socials?: {
    icon: string
    linkUrl:string
  }
}

export const Header = () => {


  return (
    <header className={`${styles.container} `} >
      <div className={styles.header} data-aos="fade-up">
        <Image
          src={Logo}
          alt=""
        />
        <nav>
          <ul>
            <li>
              <Link href="#home">
                Home
              </Link>

            </li>
            <li>
              <Link href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="">
                Contact
              </Link>
            </li>
            <li>
              <Link href="">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.socials}>
          <a href=""><InstagramLogo size={24} alt="Instagram" /></a>
          <a href=""><GithubLogo size={24} alt="Github" /></a>
          <a href=""><EnvelopeSimple size={24} alt="Email" /></a>
        </div>
     </div>
    </header>
  );
}
