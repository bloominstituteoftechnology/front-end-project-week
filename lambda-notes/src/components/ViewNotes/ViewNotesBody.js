import React from 'react';
import LambdaLeftDiv from './LambdaLeftDiv';
import NotesDiv from './NotesDiv';

const ViewNotesBody = (props) => {

	return(
		<div className="view-list-body">
		<LambdaLeftDiv />
		<NotesDiv notes={props.notes} />
		</div>
	
	
	);

};


export default ViewNotesBody;

