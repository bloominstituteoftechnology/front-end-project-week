import React, { Component } from 'react';
import { GlobalStyle, AppContainer } from './style';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SideNav from './components/SideNav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import NoteView from './components/NoteView';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			newNote: {
				id: '',
				title: '',
				textBody: ''
			}
		};
	}

	componentDidMount() {
		axios
			.get('https://fe-notes.herokuapp.com/note/get/all')
			.then((response) => {
				this.setState({
					notes: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	addNote = (event) => {
		event.preventDefault();

		axios
			.post(`https://fe-notes.herokuapp.com/note/create`, this.state.newNote)
			.then((response) => {
				this.setState({
					...this.state,
					newNote: {
						...this.state.newNote,
						id: `${response.data.success}`
					}
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	editNote = (id) => {
		axios
			.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state.newNote)
			.then((response) => {
				this.setState({
					...this.state,
					notes: [...this.state.notes, response.data]
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteNote = (event) => {
		event.preventDefault();
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
			.then(null)
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			...this.state,
			newNote: {
				...this.state.newNote,
				[event.target.name]: event.target.value
			}
		});
	};
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<AppContainer>
					<SideNav />
					<Route
						exact
						path={'/'}
						render={(props) => <NoteList {...props} notes={this.state.notes} />}
					/>
					<Route
						exact
						path={'/create'}
						render={(props) => (
							<NoteForm
								{...props}
								mode={'create'}
								handleChange={this.handleChange}
								addNote={this.addNote}
								id={this.state.newNote.id}
								buttonText="Save"
							/>
						)}
					/>
					<Route
						path={'/:id'}
						render={(props) => (
							<NoteView
								{...props}
								notes={this.state.notes}
								deleteNote={this.deleteNote}
							/>
						)}
					/>
					<Route
						exact
						path={'/edit/:id'}
						render={(props) => 
						<NoteForm
						 {...props} 
						 mode={'edit'}
						 buttonText='Update' 
						 editNote={this.editNote}
						 />}
					/>
				</AppContainer>
			</React.Fragment>
		);
	}
}

export default App;
