import Head from "next/head";
import "normalize.css";
import Nav from "../components/Nav";
import "../styles.css";

type Props = {
  Component: React.JSXElementConstructor<any>;
  pageProps: Object;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}