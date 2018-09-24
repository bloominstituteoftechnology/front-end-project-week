import React from "react";

function Note(props) {
	return (
		<div className="note">
			<div className="title">
				<h2>{props.title}</h2>
			</div>
			<hr />
			<div className="body">
				<p>{props.body}</p>
			</div>
		</div>
	);
}

export default Note;
