import React from 'react';
import './alert.css';

const Alert = (props) => {
return(
	<div className="alertBox">
	<div className="text">
	Are you sure you want to delete this?
	</div>
	<div className="select">
	<div className="confirm selection" onClick={() => props.deleteConfirm()}>
	Delete
	</div>
	<div className="deny selection" onClick={() => props.deleteCancel()}>
	No
	</div>
	</div>
	</div>
	);
}

export default Alert;