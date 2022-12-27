import Image from "next/image"
import Logo from '../../../assets/logo.svg'
import styles from './styles.module.css'


export const Footer = () => {

  return (
    <footer className={styles.footerContainer}>
      <Image
        src={Logo}
        alt=""
        className={styles.logoContainer}
      />
      <div className={styles.footerTerms} >
        <span >Support</span>
        <span >Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
      <div>
        <span>© 2020 JefferDeveloper, All Rights Reserved</span>
      </div>
    </footer>
  );
}
