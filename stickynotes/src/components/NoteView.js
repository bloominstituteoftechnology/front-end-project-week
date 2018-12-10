import React from 'react';
import {Link} from 'react-router-dom';
import { Main, H2, P, Div } from '../style';

const NoteView = (props) => {
    const id = props.match.params.id
	return (
		<Main>
			{props.notes.map((note) => {
				if (note._id === id) {
					return (
						<Div view='single' key={note._id}>
							<div>
								<Link to={`/edit/${note._id}`}>
								<P>
									Edit
								</P>
								</Link>
								<Link exact to='/'><P onClick={props.deleteNote}>Delete</P></Link>
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