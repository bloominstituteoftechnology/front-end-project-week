import React from 'react';
import { Main, H2, P, Div, Button } from '../style';

const NoteView = (props) => {
	return (
		<Main component={props.component}>
			{props.notes.map((note, index) =>
				note._id === props.id ? (
					<React.Fragment key={index}>
						<Div>
							<Button
								component="single"
								onClick={(event) => {
									event.preventDefault();
									props.toggleMode('edit');
								}}
							>
								Edit
							</Button>
							<Button
								component="single"
								onClick={(event) => {
									event.preventDefault();
									props.toggleMode('delete');
								}}
							>
								Delete
							</Button>
						</Div>
						<H2 component="single">{note.title}</H2>
						<P component="single">{note.textBody}</P>
					</React.Fragment>
				) : null
			)}
		</Main>
	);
};

export default NoteView;
