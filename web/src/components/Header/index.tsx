import Image from "next/image";
import styles from './styles.module.css'
import Logo from '../../assets/logo.svg'
import { EnvelopeSimple, InstagramLogo, GithubLogo } from 'phosphor-react'
import Link from "next/link";
import { useRouter } from "next/router";
import { NavMobile } from "./NavMobile";
import { useState } from "react";

interface Props{
  menu?: {
    title: string
    linkUrl:string
  }[],
  socials?: {
    icon: string
    linkUrl:string
  }
}

export const Header = ({ menu }: Props) => {
  const [showingBurger, setShowingBurger] = useState(false)
  const router = useRouter()


  const handleShowingBurger = () => {
    setShowingBurger(!showingBurger)
  }

  return (
    <header className={`${styles.container} `} >
      <div className={styles.header} data-aos="fade-up">
        <Image
          src={Logo}
          alt=""
          className={styles.imagemHeader}
        />
        <nav className={styles.navbarDesk}>
          <ul className={styles.navbarUl}>

            {menu?.map((item) => (
              <li key={item.title} className={styles.navbarLi}>
                <Link href={item.linkUrl}>
                  {item.title}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
        <div className={styles.socials}>
          <a href=""><InstagramLogo size={24} alt="Instagram" /></a>
          <a href=""><GithubLogo size={24} alt="Github" /></a>
          <a href=""><EnvelopeSimple size={24} alt="Email" /></a>
        </div>
      </div>

      <nav className={styles.containerMobile}>
        <Image
          src={Logo}
          alt=""
          className={styles.imagemHeaderMobile}
        />
        <button className={showingBurger ? styles.active_bx : styles.bx} id="bx" onClick={handleShowingBurger}></button>

      </nav>
      <NavMobile data={menu} showMe={showingBurger} />

    </header>
  );
}
