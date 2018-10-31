import React from 'react';
import Notes from './Notes';
import axios from 'axios';
// import Navbar from '../NavBar/Navbar';
// import { Route } from 'react-router-dom';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: ''
		};
	}
	componentDidMount() {
		const URL = `https://fe-notes.herokuapp.com/note/get/all`;
		axios
			.get(`${URL}`)
			.then((res) => {
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log(err));
	}

	getNoteId = (id) => {
		let noteId = id;
		this.setState({ noteId });
	};

	render() {
		// what gets rendered
		if (!this.state.notes.length) {
			return <h1>Loaaaaaaaaaaaaaaaaaaaaaadddding............</h1>;
		} else {
			const { notes } = this.state;
			return (
				<div>
					{/* <Route exact path="/note/:id" render={(props) => <Navbar deletePost={this.deletePost} {...props} />} /> */}
					{/*<Route exact path="/" render={() => <Notes notes={notes} getNoteId={this.getNoteId} />} /> */}
					<Notes notes={notes} getNoteId={this.getNoteId} deletePost={this.deletePost} />
				</div>
			);
		}
	}
}

export default NoteContainer;
