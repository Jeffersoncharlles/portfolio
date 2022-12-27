
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;700&family=Source+Sans+Pro:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="keywords" content="portfolio, developer, javascript" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>

  )

}
