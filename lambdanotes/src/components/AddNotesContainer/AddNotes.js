import React from "react";
import AddNote from "./AddNote";
import NoteHeader from "./NoteHeader";

function AddNotes() {
	return (
		<div className="main-container">
			<NoteHeader />
			<AddNote />
		</div>
	);
}

export default AddNotes;
