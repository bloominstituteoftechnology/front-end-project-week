// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

//Components
import { CreateNew } from '../../components';

const CreateNewView = props => {
	const { createNote, history } = props;

	return(
		<div className = 'main-content'>
			<CreateNew createNote = { createNote } history = { history } />
		</div>
	);
}

CreateNewView.propTypes = {
	createNote: PropTypes.func,
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
}

export default CreateNewView;
