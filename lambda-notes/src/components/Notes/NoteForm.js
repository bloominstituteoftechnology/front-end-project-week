import React from 'react';

export default function NoteForm(props) {
	return (
		<form>
			<input
				className="input-title"
				value={props.title}
				name="title"
				type="text"
				placeholder="Note Title"
				onChange={props.handleInputChange}
			/>
			<input
				className="input-note"
				value={props.text}
				name="note"
				type="text"
				placeholder="Note Content"
				onChange={props.handleInputChange}
			/>
			<button onClick={props.addNote()} type="button">
				Save
			</button>
		</form>
	);
}
