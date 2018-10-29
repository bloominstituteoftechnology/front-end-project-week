import React from 'react';
import Notes from './Notes';
import { noteData as notes } from '../../DummyData';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		};
	}

	componentDidMount() {
		this.setState({ notes });
	}

	render() {
		return <Notes notes={this.state.notes} />;
	}
}

export default NoteContainer;
