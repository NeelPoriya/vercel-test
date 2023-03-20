import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import React from "react";
import { Router } from "next/router";
import nProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);
  // const component = getLayout(<Component {...pageProps} />);
  nProgress.configure({
    showSpinner: false,
    speed: 200,
    trickleRate: 0.01,
  });

  const [loading, setLoading] = React.useState(false);
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
    setLoading(false);
  });

  return <Component {...pageProps} />;
}

export default MyApp;
