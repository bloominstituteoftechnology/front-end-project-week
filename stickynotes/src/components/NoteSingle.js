import React from 'react';
import { Route, Link } from 'react-router-dom';
import NoteForm from './NoteForm';

import { Main, H2, P, Div, Button } from '../style';

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
						<React.Fragment>
						<Div>
							<Button
								component='single'
								onClick={(event) => {
									event.preventDefault();
									props.toggleMode('edit');
								}}
							>
								Edit
							</Button>
							<Button
								component='single'
								onClick={(event) => {
									event.preventDefault();
									props.toggleMode('delete');
								}}
							>
								Delete
							</Button>
							</Div>
							<H2 component='single'>{note.title}</H2>
							<P component='single'>{note.textBody}</P>
						</React.Fragment>
					) : null
				)}
			</Main>
		);
	}
};

export default NoteSingle;
