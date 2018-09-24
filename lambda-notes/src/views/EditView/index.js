// React
import React from 'react';

// Components
import { Edit } from '../../components';

const EditView = props => {
	return(
		<div className = 'main-content'>
			<Edit 
				note = { props.note } 
				editNote = { props.editNote } 
				id = { props.id } 
				history = { props.history } 
			/>
		</div>
	);
}

export default EditView;
