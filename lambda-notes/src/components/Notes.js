import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
	state = { display: false };
	render() {
		return (
            <div className='notes-wrapper'>
				{this.props.notes.map(note => (
					<Link className='notes' to={`/notes/${note.id}`}>
						<div key={note.id}>
							<h4 className='notes-title'>{note.title}</h4>
							<p className='notes-text'>{note.text}</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Notes;