import React from 'react';
import { Main, Section, H2, P, H1, Div } from '../style';
import {Link} from 'react-router-dom';

const NoteList = (props) => {

	return (
		<Main>
			<H1>Notes</H1>
			<Div>
			{props.notes.slice(0,12).map((note) => 
				<Link to={`/${note._id}`}>
				<Section key={note._id}>
					<H2>{note.title}</H2>
					<P>{note.textBody}</P>
				</Section>
				</Link>
			)}
			</Div>
			
		</Main>
	);
};

export default NoteList;