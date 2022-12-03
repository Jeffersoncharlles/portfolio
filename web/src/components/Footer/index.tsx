import Image from "next/image"
import Logo from '../../assets/logo.svg'


export const Footer = () => {

  return (
    <footer className="h-11 flex justify-between items-center mb-16 mt-48">
      <Image
        src={Logo}
        alt=""
        className="w-9 h-9"
      />
      <div >
        <span className="mr-6">Support</span>
        <span className="mr-6">Privacy Policy</span>
        <span>Terms and Conditions</span>
      </div>
      <div>
        <span>© 2020 JefferDeveloper, All Rights Reserved</span>
      </div>
    </footer>
  );
}
