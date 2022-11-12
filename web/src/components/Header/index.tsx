import Image from "next/image";
import styles from './styles.module.css'
import Logo from '../../assets/logo.svg'
import { EnvelopeSimple, InstagramLogo, } from 'phosphor-react'
import { gsap } from "gsap";
import { useEffect } from "react";

export const Header = () => {

  useEffect(() => {

  }, [])

  return (
    <header className={styles.header}>

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
        <a href=""><InstagramLogo size={24} />Instagram</a>
        <a href="">Github</a>
        <a href=""><EnvelopeSimple size={24} />Email</a>
      </div>

    </header>
  );
}