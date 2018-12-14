import React from 'react';
import NoteForm from './NoteForm';
import NoteView from './NoteView';
import ConfirmDelete from './ConfirmDelete';

const NoteSingle = (props) => {
	const id = props.match.params.id;
	if (props.mode === 'edit') {
		return (
			<NoteForm
				header={'Update Existing Note'}
				mode={props.mode}
				buttonText="Update"
				toggleMode={props.toggleMode}
				editNote={props.editNote}
				match={props.match}
				id={id}
				history={props.history}
			/>
		);
	} else if (props.mode === 'delete') {
		return (
			<React.Fragment>
				<ConfirmDelete
					id={id}
					toggleMode={props.toggleMode}
					deleteNote={props.deleteNote}
					history={props.history}
				/>
				<NoteView
					notes={props.notes}
					toggleMode={props.toggleMode}
					component="delete"
					id={id}
				/>
			</React.Fragment>
		);
	} else {
		return (
			<NoteView
				notes={props.notes}
				toggleMode={props.toggleMode}
				component="single"
				id={id}
			/>
		);
	}
};

export default NoteSingle;
