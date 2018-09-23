// React
import React from 'react';

// Components
import NoteView from '../NoteView';

const ListView = props => {
	return(
		<div className = 'main-content'>
			<h2>Your Notes:</h2>

			{ props.notes.map((note, i) => <NoteView key = { i } note = { note } />) }
		</div>
	);
}

export default ListView;
