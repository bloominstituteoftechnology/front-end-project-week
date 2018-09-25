import React from "react";

function OneNote(props) {
	console.log(props);
	return (
		<div className="Onenote">
			<h2 className="text-header">{props.title}</h2>

			<p className="text-body-text">{props.body}</p>
		</div>
	);
}

export default OneNote;
