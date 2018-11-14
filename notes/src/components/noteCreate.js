import React from 'react';
import "../css/note.css"

const NoteCreate = props => {
	return (
		<form className="note-create-form" onSubmit={props.createSubmit}>
			<header className="note-create-header">Create New Note</header>
			<input
				type="text"
				className="note-title-input"
				value={props.value}
				placeHolder="Note Content"
				onChange={props.changeHandler}
				name="note-title-create" />
			<textarea
				type="text"
				className="note-textarea"
				value={props.value}
				onChange={props.changeHandler}
				name="note-textarea-create" />
			<button className="save-button" onSubmit={props.createSubmit}>Save</button>
		</form>
	);
};
export default NoteCreate;