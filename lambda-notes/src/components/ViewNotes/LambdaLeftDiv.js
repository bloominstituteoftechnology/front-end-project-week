import React from 'react';
import {Link} from 'react-router-dom';

const LambdaLeftDiv = (props) => {

	return(
		<div className="left-div">
		<h1 className="lambda-notes-header">Notes App</h1>
		<Link  onClick={props.viewNotesHandler}  style={{ textDecoration: 'none' }} to="/"><div className="teal-div">View Your Notes</div></Link>
		<Link  onClick={props.createNotesReset} style={{ textDecoration: 'none' }} to="/add"><div className="teal-div">+ Create New Note</div></Link>
		</div>
	);
};




export default LambdaLeftDiv;



