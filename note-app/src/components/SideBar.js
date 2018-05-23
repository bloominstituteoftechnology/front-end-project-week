import React from "react";
import { Link } from "react-router-dom";
import '../style/SideBar.css';

const buttonStyle = {
  marginTop: 10,
	fontSize: 20,
	marginBottom: 10,
	backgroundColor: '#25b8bd',
	cursor: 'pointer',
	width: '85%',
	color: 'white',
	height: 50,
	fontWeight: 'bold'
}

const SideBar = props => {
  return (
    <div>
      <div>
        <h1>
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
