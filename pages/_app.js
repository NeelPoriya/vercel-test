import "../styles/globals.css";
import "@fontsource/roboto/300.css";
import React, { useEffect, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  CssBaseline,
  getFormLabelUtilityClasses,
  ThemeProvider,
} from "@mui/material";
import theme from "./../config/theme";
// import AuthContext, { AuthContextProvider } from "./../store/auth-context";
import MainLayout from "../layouts/mainLayout";
import { Router } from "next/router";
import Head from "next/head";
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

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return <Component {...pageProps} />;
}

export default MyApp;
