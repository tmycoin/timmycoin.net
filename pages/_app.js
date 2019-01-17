// pages/_app.js
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <title>Timmycoin (TMY) is Private, Untraceable, a CryptoCurrency.</title>
          <link id="favicon" rel="shortcut icon" href="/static/favicon.png" type="image/png" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,600" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
