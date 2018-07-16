import React from 'react';
import {Link} from 'react-router-dom';

const LambdaLeftDiv = () => {

	return(
		<div className="left-div">
		<h1 className="lambda-notes-header">Lambda Notes</h1>	
		<Link to="/"><div className="teal-div">View Your Notes</div></Link>
		<Link to="/createnewnote"><div className="teal-div">Create New Note</div></Link>
		</div>
	);
};




export default LambdaLeftDiv;



