import React from 'react';
import './sideBar.css';

const SideBar = (props) => {
return(
	<div className="sideBar">
		<div className="header">
		Lamdba
		Notes
		</div>
		<div className="buttons">
			<div className="button" onClick={props.viewing}>
			view your notes
			</div>
			<div className="button" onClick={props.adding}>
			+ Create new note
			</div>
		</div>
	</div>
	);
}

export default SideBar;