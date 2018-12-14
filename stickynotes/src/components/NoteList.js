import React from 'react';
import { Main, Section, H2, H1, Div } from '../style';
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
				history={props.history}
			/>
		);
	} else {
		return (
			<Main>
				<H1>Notes</H1>
				<Div component='list' >
					{props.notes.map((note, index) => (
						index < 9 ? 
						<Link to={`/${note._id}`} key={index} style={{textDecoration: 'none'}} >
							<Section >
								<H2 component='list'>{note.title}</H2>
							</Section>
						</Link> : null
					))}
				</Div>
				<H2 onClick={props.sort} sort>Sort</H2>
			</Main>
		);
	}
};

export default NoteList;
