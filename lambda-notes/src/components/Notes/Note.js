import React from 'react';

const Note = (props) => {
	return (
		<div className="Note">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
};

Note.defautProps = {
	title: '',
	textBody: '',
};

export default Note;
