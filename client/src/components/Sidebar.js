import React from "react";
import { Link } from "react-router-dom";

import SidebarHeader from "./SidebarHeader";

//The sidebar component with buttons linking to view page and create page

const Sidebar = () => {
  return (
    <section className="sidebar">
      <SidebarHeader />
      <div>
        <Link to="/">
          <div className="sidebar-button">View Your Notes</div>
        </Link>
        <Link to="/create">
          <div className="sidebar-button">+ Create New Note</div>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
