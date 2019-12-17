import React from 'react';
import '../css/createNote.css';
import { Button } from '@blueprintjs/core';

const CreateNote = props => {
	const createNewNote = () => {
		props.addNote();
		props.history.push('/notes');
	};
	return (
		<div className="createNote">
			<h4 className="createNoteHeader">Create New Note:</h4>
			<form className="createNoteForm">
				<input
					cols="30"
					rows="10"
					type="text"
					placeholder="Note Title"
					name="title"
					value={props.title}
					onChange={props.changeHandler}
					className="newTitle bp3-input"
				/>
				<input
					type="text"
					placeholder="Note Content"
					name="textBody"
					value={props.textBody}
					onChange={props.changeHandler}
					className="newTextBody bp3-input"
				/>
			</form>
			<Button style={{ backgroundColor: `#00B8BA` }} onClick={createNewNote}>
				Save
			</Button>
		</div>
	);
};

export default CreateNote;
