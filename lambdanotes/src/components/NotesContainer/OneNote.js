import React from "react";

function OneNote(props) {
	console.log(props);
	return (
		<div className="Onenote">
			<h2 className="text-header-text">{props.title}</h2>
			<hr className="divider-main" />
			<p className="text-body-text">{props.body}</p>
		</div>
	);
}

export default OneNote;
