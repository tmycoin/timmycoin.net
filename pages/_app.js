// pages/_app.js
import App, { Container } from 'next/app';
import Head from 'next/head';

const GA_TRACKING_ID = 'UA-135290600-1';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Timmycoin (TMY) is Private, Untraceable, a CryptoCurrency.</title>
          <link id="favicon" rel="shortcut icon" href="/static/favicon.png" type="image/png" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <meta name="theme-color" content="#0A3D6F" />
          <meta name="google-play-app" content="app-id=com.timmycoin" />

          <meta property="og:title" content="Timmycoin (TMY)" />
          <meta property="og:description" content="Timmycoin (TMY) is a Private, Untraceable CryptoCurrency Based on CryptoNote BlockChain Technology with a ASIC-Friendly Proof of Work Algorithm." />
          <meta property="og:image" content="https://www.timmycoin.net/static/images/avatar.png" />
          <meta property="og:url" content="https://www.timmycoin.net" />
          <meta property="og:type" content="website" />

          <meta name="twitter:title" content="Timmycoin (TMY)" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://www.timmycoin.net" />
          <meta name="twitter:description" content="Timmycoin (TMY) is a Private, Untraceable CryptoCurrency Based on CryptoNote BlockChain Technology with a ASIC-Friendly Proof of Work Algorithm." />
          <meta name="twitter:image:src" content="https://www.timmycoin.net/static/images/avatar.png" />


          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,600" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
