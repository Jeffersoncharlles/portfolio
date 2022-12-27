import '../styles/global.css'
import AOS from 'aos';
import "aos/src/sass/aos.scss"

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-quad",// curva de transição
      duration: 1000, // duração da transição
      once: true, // animar so uma vez
    });
  }, []);

  return <Component {...pageProps} />
}
