import React from 'react';
import ViewHeader from './ViewHeader';
import ViewNotesBody from './ViewNotesBody';

const ViewNotesContainer = (props) => {

	return(
		<div>
		<ViewNotesBody notes={props.notes}/>
		</div>
	
	
	);

};





export default ViewNotesContainer;

