import { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

import "../styles/index.css";

import { description, title, url } from "../util/consts";

const SatoshiFont = localFont({
  src: "../../public/fonts/Satoshi.ttf",
  variable: "--font-satoshi",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/evalx-logo.png" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@evalxsh" />
        <meta name="twitter:creator" content="@evalxsh" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={SatoshiFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
