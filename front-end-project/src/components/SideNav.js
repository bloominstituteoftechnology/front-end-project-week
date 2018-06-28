import React from "react";
import { Link } from "react-router-dom";
import "../styling/SideNav.css";

const SideNav = props => {
  return (
    <div
      className="nav sideNav"
      style={{
        background: props.deleting ? "gray" : "#D8D8D8",
        opacity: props.deleting ? ".5" : "1",
        borderRight: props.deleting ? "1px solid gray" : "#979797 1px solid",
        height: "100vh"
      }}
      onClick={() => props.cancelDelete()}
    >
      <h1 className="headingforSideNav" onClick={props.cancelDelete}> Lambda Notes </h1>
      <div
        className="buttonStyle"
        style={{ opacity: props.deleting ? ".6" : "1" }}
        onClick={() => props.cancelDelete()}
      >
        <Link to="/">
          <button> View Your Notes </button>
        </Link>
      </div>
      <div
        className="buttonStyle"
        style={{ opacity: props.deleting ? ".6" : "1" }}
      >
        <Link to="/create/">
          <button>+Create New Note </button>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
