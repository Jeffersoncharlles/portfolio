import Image from "next/image"
import Logo from '../../assets/logo.svg'


export const Footer = () => {

  return (
    <footer>
      <Image
        src={Logo}
        alt=""
      />
      <div>
        <span>Support</span>
        <span>Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
      <div>
        <span>© 2020 JefferDeveloper, All Rights Reserved</span>
      </div>
    </footer>
  );
}