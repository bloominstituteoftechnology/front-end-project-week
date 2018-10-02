import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
	render() {
		return (
			<div className="Notes">
				<ul>
					{this.props.notes.map((note) => {
						return (
							<Note title={note.title} text={note.textBody} key={note._id} />
						);
					})}
				</ul>
			</div>
		);
	}
}

Note.defaultProps = {
	notes: [],
};

export default Notes;
