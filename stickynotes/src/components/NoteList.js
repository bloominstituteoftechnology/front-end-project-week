import React from 'react';
import { Main, Section, H2, P, H1, Div } from '../style';
import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';

const NoteList = (props) => {
	if (props.mode === 'create') {
		return (
			<NoteForm
				header={'Create New Note'}
				mode={props.mode}
				toggleMode={props.toggleMode}
				buttonText="Save"
				addNote={props.addNote}
				id={props.id}
			/>
		);
	} else {
		return (
			<Main>
				<H1>Notes</H1>
				<Div>
					{props.notes.slice(0, 12).map((note) => (
						<Link to={`/${note._id}`} key={note._id}>
							<Section>
								<H2>{note.title}</H2>
								<P>{note.textBody}</P>
							</Section>
						</Link>
					))}
				</Div>
			</Main>
		);
	}
};

export default NoteList;
