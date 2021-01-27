import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Courgette', cursive;

    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Satisfy&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Maven+Pro:wght@400;500;600;700;800;900&family=Satisfy&display=swap" rel="stylesheet" />

        <title>Quiz Coffee</title>
        <meta name="title" content="Quiz Coffee" />
        <meta name="description" content="Um quiz sobre café para você se divertir!" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Quiz Coffee" />
        <meta property="og:description" content="Um quiz sobre café para você se divertir!" />
        <meta property="og:image" content="https://www.itl.cat/pngfile/big/36-365904_coffee-face-smile-wallpapers-hd-happy-cup-of.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Quiz Coffee" />
        <meta property="twitter:description" content="Um quiz sobre café para você se divertir!" />
        <meta property="twitter:image" content="https://www.itl.cat/pngfile/big/36-365904_coffee-face-smile-wallpapers-hd-happy-cup-of.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
