import Image from "next/image";
import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg'
import { EnvelopeSimple, InstagramLogo, GithubLogo } from 'phosphor-react'
import { gsap } from "gsap";
import { useEffect } from "react";

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

  useEffect(() => {

  }, [])

  return (
    <header>

      <div className={styles.header}>
        <Image
          src={Logo}
          alt=""
        />
        <nav>
          <ul>
            <li>Services</li>
            <li>Works</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <div>
          <a href=""><InstagramLogo size={24} /></a>
          <a href=""><GithubLogo size={24} /></a>
          <a href=""><EnvelopeSimple size={24} /></a>
        </div>
     </div>
    </header>
  );
}
