import React from 'react';
import { Link } from 'react-router-dom';
// import Note from './Note';

function Notes(props) {
	return (
		<div className="Notes">
			<ul>
				{props.notes.map((note, index) => (
					<div className="NoteList" key={index}>
						<Link to={`/notes/${note.id}`} style={{ textDecoration: 'none' }}>
							<h3>{note.title}</h3>
						</Link>
						<hr />
						<p>{note.content}</p>
					</div>
				))}
			</ul>
		</div>
	);
}
/* class Notes extends Component {
	render() {
		return (
			<div className="Notes">
				<ul>
					{this.props.notes.map((note) => {
						return (
							<Note
								title={note.title}
								text={note.content}
								id={note.id}
								key={note.id}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
} */

/* Note.defaultProps = {
	notes: [],
}; */

export default Notes;
