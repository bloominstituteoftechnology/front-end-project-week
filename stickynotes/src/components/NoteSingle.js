import React from 'react';
import NoteForm from './NoteForm';
import { Main, H2, P, Div } from '../style';

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
			/>
		);
	} else {
		return (
			<Main>
				{props.notes.slice(0, 12).map((note) =>
					note._id === id ? (
						<Div view="single" key={note._id}>
							<P
								onClick={(event) => {
									event.preventDefault();
									props.toggleMode('edit');
								}}
							>
								Edit
							</P>
							<P
								onClick={(event) => {
									event.preventDefault();
									props.history.push('/');
									props.toggleMode('default');
									props.deleteNote(id);
								}}
							>
								Delete
							</P>
							<H2>{note.title}</H2>
							<P>{note.textBody}</P>
						</Div>
					) : null
				)}
			</Main>
		);
	}
};

export default NoteSingle;
