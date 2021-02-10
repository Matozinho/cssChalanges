// pages/_app.js
import React from "react";
import Head from "next/head";
import styles from "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>cssCalanges</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
