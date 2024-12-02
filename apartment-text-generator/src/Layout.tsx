import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet /> {/* Dynamischer Inhalt */}
      </div>
    </div>
  );
};

export default Layout;
