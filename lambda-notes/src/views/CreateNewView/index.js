// React
import React from 'react';

//Components
import { CreateNew } from '../../components';

const CreateNewView = props => {
	return(
		<div className = 'main-content'>
			<CreateNew createNote = { props.createNote } history = { props.history } />
		</div>
	);
}

export default CreateNewView;
