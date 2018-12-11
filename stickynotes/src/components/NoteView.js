import React from 'react';
import {Link} from 'react-router-dom';
import { Main, H2, P, Div } from '../style';

const NoteView = (props) => {
    const id = props.match.params.id
	return (
		<Main>
			{props.notes.slice(0,12).map((note) => {
				if (note._id === id) {
					return (
						<Div view='single' key={note._id}>
							<div>
								<Link to={`/edit/${note._id}`}>
								<P>
									Edit
								</P>
								</Link>
								<P onClick={(event) =>{event.preventDefault(); props.history.push('/'); props.deleteNote(id)}}>Delete</P>
							</div>
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