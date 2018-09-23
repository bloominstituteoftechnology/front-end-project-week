// React
import React from 'react';

// Components
import NoteView from '../NoteView';

const ListView = props => {
	return(
		<div className = 'main-content'>
			{ props.notes.map((note, i) => <NoteView key = { i } note = { note } />) }
		</div>
	);
}

export default ListView;
