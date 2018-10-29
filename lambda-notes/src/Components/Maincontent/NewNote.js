import React from 'react';

const NewNote = (props) => {
	return (
		<div>
			<h1>Create New Note:</h1>
			<form action="submit">
				<input
					type="text"
					name="noteTitle"
					value={props.noteTitle}
					onChange={props.changeHandler}
					placeholder="Note Title"
				/>
				<input
					type="text"
					name="noteContent"
					value={props.noteTitle}
					onChange={props.changeHandler}
					placeholder="Note Title"
				/>
				<button>Save</button>
			</form>
		</div>
	);
};

export default NewNote;
