import React from "react";
import Layout from "../../components/Layout/Layout";
import SideBar from "../../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Content from "../../components/Content/Content";

export default function Dashboard() {
  return (
    <Layout>
      <SideBar />
      <Outlet />
    </Layout>
  );
}
