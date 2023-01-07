import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Teach with Jingles🎵 by Djembeleza" key="title"/>
        <meta property="og:description" content="Teach your child👶🏿👶🏻🚸 anything by singing simple and easy to remember jingles" key="description"/>
        <meta
          property="og:image"
          content="/og_image.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
