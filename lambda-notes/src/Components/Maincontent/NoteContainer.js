import React from 'react';
import Notes from './Notes';
import axios from 'axios';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		};
	}
	componentDidMount() {
		const URL = `https://killer-notes.herokuapp.com/note/get/`;
		axios
			.get(`${URL}all`)
			.then((res) => {
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log(err));
	}

	render() {
		return <Notes notes={this.state.notes} />;
	}
}

export default NoteContainer;
