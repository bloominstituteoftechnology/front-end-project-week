import React from "react";
import { Link } from "react-router-dom";

//The sidebar component with buttons linking to view page and create page

const Sidebar = props => {
  return (
    <section className="sidebar">
      <div className="header">
        <div className="sidebar-header">Lambda Notes</div>
      </div>
      <div>
        <Link to="/">
          <div className="sidebar-button">View Your Notes</div>
        </Link>
        <Link to="/create">
          <div className="sidebar-button">+ Create New Note</div>
        </Link>

        <form>
          <input
            className="Search"
            type="search"
            placeholder="Search"
            onKeyDown={props.search}
          />
        </form>

        <button onClick={props.logout}>Log Out</button>
      </div>
    </section>
  );
};

export default Sidebar;
