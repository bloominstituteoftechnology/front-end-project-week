import React from 'react';
import "../css/note.css"

const NoteForm = props => {
	return (
		<form>
			<input className="inputField" value={props.inputText} onChange={props.updateUserInput} />
			<button className="inputButton" disabled={props.inputLength === 0}onClick={props.addToList}>Add Item</button>
			<button className="clearButton" onClick={props.clearComplete}>Clear Completed</button>
		</form>
	);
};
export default NoteForm;