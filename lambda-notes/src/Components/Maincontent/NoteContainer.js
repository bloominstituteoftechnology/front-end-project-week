import React from 'react';
import Notes from './Notes';

const NoteContainer = (props) => {
	return <Notes notes={props.notes} />;
};

export default NoteContainer;
