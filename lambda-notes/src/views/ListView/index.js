// React
import React from 'react';

// Components
import Note from '../../components/Note';

const ListView = props => {
	return(
		<div className = 'main-content'>
			<div className = 'list'>
				<h2>Your Notes:</h2>

				{ props.notes.map((note, i) => <Note history = { props.history } key = { i } index = { i } note = { note } />) }
			</div>
		</div>
	);
}

export default ListView;
