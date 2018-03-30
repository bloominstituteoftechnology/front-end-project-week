import React from "react";
import { Link } from "react-router-dom";
import { CSVLink } from 'react-csv';

// import LoginForm from "./login-form";

const SideNav = props => {
	return (
		<div className="SideNav">
			<h1 className="SideNav__Title">Lambda Notes</h1>
			<Link to={"/"}><button className="View">View Your Notes </button></Link>
			<Link to={"/create"}><button type="button">+ Create New Note</button></Link>
			<CSVLink className="CSV" data={ props.notes } filename={"notes.csv"}>Grab CSV</CSVLink>
		</div>
	);
};

export default SideNav;
