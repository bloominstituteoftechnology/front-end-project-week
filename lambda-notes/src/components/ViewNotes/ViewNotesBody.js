import React from 'react';
import LambdaLeftDiv from './LambdaLeftDiv';
import NotesDiv from './NotesDiv';

const ViewNotesBody = (props) => {

	return(
		<NotesDiv notes={props.notes} />	
	);

};


export default ViewNotesBody;

