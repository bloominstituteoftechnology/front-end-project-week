import React from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
  display: "inline-flex",
  marginTop: 10,
  fontSize: 20,
  marginBottom: 10,
  backgroundColor: "#25b8bd",
  cursor: "pointer",
  width: "80%",
  color: "white",
  height: 50,
  fontWeight: "bold",
  marginLeft: "7.5%"
};

const headerStyle = {
  fontWeight: "bold"
};
const container = {
  marginLeft: "7.5%"
}
const marginSide = {
  marginLeft: "7.5%",
  height: "100%"
};

const SideBar = props => {
  return (
    <div style={container}>
      <div style={marginSide}>
        <h1 style={headerStyle}>
          Lambda <br />Notes{" "}
        </h1>
      </div>
      <Link to="/">
        <button style={buttonStyle}>View Your Notes</button>
      </Link>
      <Link to="/notes/new">
        <button style={buttonStyle}>+ Create New Note</button>
      </Link>
    </div>
  );
};
export default SideBar;
