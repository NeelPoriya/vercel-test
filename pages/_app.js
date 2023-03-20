import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import React from "react";
import { Router } from "next/router";
import nProgress from "nprogress";
import { ProSidebarProvider } from "react-pro-sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import theme from "./../config/theme";

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

  let cmp = <Component {...pageProps} />;
  if (Component.getLayout) {
    cmp = Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <CssBaseline />
        <Head>
          <link
            key={"nprogress"}
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        {cmp}
      </ProSidebarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
