import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
// import AuthContext from './../../store/auth-context';
import AppHeader from "./../../components/AppHeader";
import SideNav from "./../../components/SideNav";
import MainLayout from "../../layouts/mainLayout";
import server from "../../server";

const Dashboard = ({ user }) => {
  // const authCtx = useContext(AuthContext);

  let name = "";
  if (user) {
    name = user.name;
  }
  return (
    <>
      <Typography varient="h6">DashBoard, You are {name}</Typography>
    </>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;

  if (!req.cookies.jwt) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const response = await fetch(`${server}/api/users/verify`, {
    headers: {
      Authorization: `Bearer ${req.cookies.jwt}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return {
      props: {
        user: data.user,
      },
    };
  }

  return {
    props: {},
  };
}

// Dashboard.getLayout = (page) => <MainLayout>{page}</MainLayout>;
// Dashboard.getLayout = (page) => <>{page}</>;

export default Dashboard;
