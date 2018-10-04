import React from 'react';
import { Link } from 'react-router-dom';

// Individual Notes Listed

const Note = (props) => {
	console.log(props);

	return (
		<div className="Note">
			<Link to={`/noteview/${props.id}/`}>
				<h3>{props.title}</h3>
			</Link>
			<hr />
			<p>{props.text}</p>
		</div>
	);
};

Note.defautProps = {
	title: '',
	text: '',
};

export default Note;
