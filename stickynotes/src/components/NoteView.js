import React from 'react';
import { Main, H2, P, Div } from '../style';

const NoteView = (props) => {
    const id = props.match.params.id
	return (
		<Main>
			{props.notes.map((note) => {
				if (note._id === id) {
					return (
						<Div view='single'>
							<H2>{note.title}</H2>
							<P>{note.textBody}</P>
						</Div>
					);
				} else {
                    return (
                        null
                    )
                }
			})}
		</Main>
	);
};

export default NoteView