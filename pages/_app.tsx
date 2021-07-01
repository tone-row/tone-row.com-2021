import "modern-css-reset";
import "./_app.css";
import "../slang/slang.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";
// Code Highlight
import "highlight.js/styles/night-owl.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-domain="tone-row.com"
          src="https://plausible.io/js/plausible.js"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
