
import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=JetBrains+Mono:wght@100;200;300;400;500;700&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="keywords" content="portfolio, developer, javascript" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>

  )

}
