// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Components
import { Edit } from '../../components';

const EditView = props => {
	const { note, editNote, history } = props;

	return(
		<div className = 'main-content'>
			<Edit 
				note = { note } 
				editNote = { editNote } 
				history = { history } 
			/>
		</div>
	);
}

EditView.propTypes = {
	editNote: PropTypes.func,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
	note: PropTypes.shape({
		content: PropTypes.string,
		id: PropTypes.number,
		title: PropTypes.string,
	}),
}

export default EditView;
