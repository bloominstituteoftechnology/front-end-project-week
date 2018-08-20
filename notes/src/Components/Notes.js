import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
	state = { display: false };
	render() {
		return (
			<div>
				{this.props.notes.map(note => (
					<Link to={`/notes/${note.id}`}>
						<h4>{note.title}</h4>
						<p>{note.text}</p>
					</Link>
				))}
			</div>
		);
	}
}
export default Notes;

// const Notes = ({ notes }) => (
// 	<div>
// 		{notes.map(note => (
// 			<Link to={`/notes/${note.id}`}>
// 				<h4>{note.title}</h4>
// 				<p>{note.text}</p>
// 			</Link>
// 		))}
// 	</div>
// );
// export default Notes;
