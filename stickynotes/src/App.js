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

	editNote = (note, id) => {
		console.log(note);
		axios
			.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
			.then((response) => {
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

	deleteNote = (id) => {
		axios
			.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
			.then((response) => {
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

	onDragOver = (event) => {
		event.preventDefault();
	};

	onDrop = (event) => {
		event.preventDefault();
		event.dataTransfer.getData('id');
		this.setState({
			...this.state
		});
	};

	onDragStart = (event, id) => {
		event.dataTransfer.setData('id', id);
	};

	sort = () => {
		function compare(a, b) {
			const titleA = a.title.toUpperCase();
			const titleB = b.title.toUpperCase();
			let comparison = 0;
			if (titleA > titleB) {
				comparison = 1;
			} else if (titleA < titleB) {
				comparison = -1;
			}
			return comparison;
		}
		this.setState({
			...this.state,
			notes: this.state.notes.sort(compare)
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
								onDragOver={this.onDragOver}
								onDrop={this.onDrop}
								onDragStart={this.onDragStart}
								sort={this.sort}
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
