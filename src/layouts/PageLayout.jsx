import React from "react";
import { Outlet } from "react-router-dom";

import "./PageLayout.css";
import Sidebar from "../components/sidebar/Sidebar";

const PageLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content w-full">
        <Outlet /> {/* Nested pages will render here */}
      </main>
    </div>
  );
};

export default PageLayout;
