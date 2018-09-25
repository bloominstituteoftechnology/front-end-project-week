// React
import React from 'react';

// Components
import { Note } from '../../components';

const ListView = props => {
	return(
		<div className = 'main-content'>
			<div className = 'list'>
				<h2>{ props.username }'s Notes:</h2>

				{ props.notes.map((note, i) => <Note history = { props.history } key = { i } note = { note } />) }
			</div>
		</div>
	);
}

export default ListView;
