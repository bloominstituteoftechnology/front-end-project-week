import React from 'react';
import { Main, Section, H1, P } from '../style';

const NoteList = (props) => {
	return (
		<Main>
			{props.notes.map((note) => 
				<Section key={note._id}>
					<H1>{note.title}</H1>
					<P>{note.textBody}</P>
				</Section>
			)}
		</Main>
	);
};

export default NoteList;