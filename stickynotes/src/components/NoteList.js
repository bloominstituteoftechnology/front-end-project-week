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
				<Div component='list' onDragOver={(e)=> props.onDragOver(e)} onDrop={(e)=> props.onDrop(e)}>
					{props.notes.slice(0, 12).map((note, index) => (
						<Link to={`/${note._id}`} key={index} style={{textDecoration: 'none'}} draggable onDragStart={e => props.onDragStart(e, note._id)}>
							<Section >
								<H2 component='list'>{note.title}</H2>
							</Section>
						</Link>
					))}
				</Div>
				<H2 onClick={props.sort}>Sort</H2>
			</Main>
		);
	}
};

export default NoteList;
