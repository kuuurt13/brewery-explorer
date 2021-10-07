import Head from "next/head";
import styled from "styled-components";
import Nav from "../components/Nav";
import { ThemeContextProvider } from "../hooks/useTheme";
import { BreweriesContextProvider } from "../hooks/useBreweries";

type Props = {
  Component: React.JSXElementConstructor<any>;
  pageProps: Object;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <ThemeContextProvider>
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
      <BreweriesContextProvider>
        <StyledMain>
          <Component {...pageProps} />
        </StyledMain>
      </BreweriesContextProvider>
    </ThemeContextProvider>
  );
}

const StyledMain = styled.main`
  margin: 0.5rem 5rem;
`;
