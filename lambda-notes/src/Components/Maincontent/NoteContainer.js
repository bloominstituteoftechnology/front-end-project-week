import React from 'react';
import Notes from './Notes';
import axios from 'axios';
// import Navbar from '../NavBar/Navbar';
import { Route } from 'react-router-dom';

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

	// static getDerivedStateFromProps(prevState) {
	// 	// if (notes !== prevState.id) {
	// 	// 	return {
	// 	// 		...notes
	// 	// 	};
	// 	// }
	// 	console.log(this.state.notes, prevState);
	// 	// return null;
	// }

	componentWillReceiveProps(nextProps) {
		console.log('Component will receive props', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('should component update?', nextProps, nextState);
		if (this.state.notes.length !== nextState.length) {
			return true;
		}
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Component Will update:', nextProps, nextState);
		return true;
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component did update', prevProps, prevState);
	}

	componentWillUnmount() {
		console.log('Component will unmount');
	}

	// onChangeHomeMounted() {
	// 	this.setState({
	// 		homeMounted: !this.state.homeMounted
	// 	});
	// }

	getNoteId = (id) => {
		let noteId = id;
		this.setState({ noteId });
	};

	render() {
		// what gets rendered
		const { notes } = this.state;
		return (
			<div>
				{/* <Route exact path="/note/:id" render={(props) => <Navbar deletePost={this.deletePost} {...props} />} /> */}
				<Route exact path="/" render={() => <Notes notes={notes} getNoteId={this.getNoteId} />} />
			</div>
		);
	}
}

export default NoteContainer;
