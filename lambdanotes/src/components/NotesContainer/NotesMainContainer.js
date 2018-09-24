import React from "react";
import MainHeader from "./NotesHeader";
import MainNotes from "./NotesList";

function NotesMainContainer() {
	return (
		<div className="main-container">
			<MainHeader />
			<MainNotes />
		</div>
	);
}

export default NotesMainContainer;
