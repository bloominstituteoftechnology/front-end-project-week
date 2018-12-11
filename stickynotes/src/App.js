import React, { Component } from 'react';
import { GlobalStyle, AppContainer } from './style';
import { Route } from 'react-router-dom';
import axios from 'axios';
import SideNav from './components/SideNav';
import NoteList from './components/NoteList';
import NoteSingle from './components/NoteSingle';
import ConfirmDelete from './components/ConfirmDelete';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			newId: '',
			mode: 'default'
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

	addNote = (note) => {
		axios
			.post(`https://fe-notes.herokuapp.com/note/create`, note)
			.then((response) => {
				this.setState({
					...this.state,
					newId: `${response.data.success}`
				});
				return axios.get(
					`https://fe-notes.herokuapp.com/note/get/${response.data.success}`
				);
			})
			.then((response) => {
				this.setState({
					...this.state,
					notes: [response.data, ...this.state.notes]
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	editNote = (note) => {
		console.log(note);
		axios
			.put(`https://fe-notes.herokuapp.com/note/edit/${note._id}`, note)
			.then((response) => {
				this.setState({
					...this.state,
					notes: [response.data, ...this.state.notes]
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteNote = (id) => {
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
			.then((response) => {
				console.log(response);
				return axios.get('https://fe-notes.herokuapp.com/note/get/all');
			})
			.then((response) => {
				this.setState({
					notes: response.data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	toggleMode = (mode) => {
		this.setState({
			...this.state,
			mode
		});
	};
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<AppContainer>
					<Route
						path={'/'}
						render={(props) => (
							<SideNav {...props} toggleMode={this.toggleMode} />
						)}
					/>
					<Route
						exact
						path={'/'}
						render={(props) => (
							<NoteList
								{...props}
								notes={this.state.notes}
								mode={this.state.mode}
								toggleMode={this.toggleMode}
								addNote={this.addNote}
								id={this.state.newId}
							/>
						)}
					/>

					<Route
						path={'/:id'}
						render={(props) => (
							<React.Fragment>
								<NoteSingle
									{...props}
									notes={this.state.notes}
									toggleMode={this.toggleMode}
									deleteNote={this.deleteNote}
									editNote={this.editNote}
									mode={this.state.mode}
								/>
							</React.Fragment>
						)}
					/>
					<Route
						path={`/:id/delete`}
						render={(props) => (
							<ConfirmDelete
								deleteNote={props.deleteNote}
								toggleMode={props.toggleMode}
								history={props.history}
							/>
						)}
					/>
				</AppContainer>
			</React.Fragment>
		);
	}
}

export default App;
