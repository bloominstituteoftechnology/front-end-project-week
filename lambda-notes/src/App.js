import React from 'react';
import NoteContainer from './Components/Maincontent/NoteContainer';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import NewNote from './Components/Maincontent/NewNote';
import styled from 'styled-components';
import axios from 'axios';
import { Route } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			newNote: {
				noteTitle: '',
				noteContent: ''
			}
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

	changeHandler = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	saveNote = () => {
		// if (this.state.noteTitle === 0 || this.state.noteContent === 0) {
		// 	alert('Please fill out both fields');
		// } else {
		axios
			.post('https://killer-notes.herokuapp.com/note/create', this.state.newNote)
			.then((res) => {
				this.setState({
					notes: res.data,
					noteTitle: '',
					noteContent: ''
				});
			})
			.catch((err) => console.log(err));
		// }
	};

	render() {
		return (
			<StyledContainer>
				<Route path="/" render={(props) => <SidebarContainer {...props} />} />
				<Route exact path="/" render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
				<Route
					exact
					path="/create-new-note"
					render={(props) => (
						<NewNote
							{...props}
							value={this.state.newNote}
							changeHandler={this.changeHandler}
							saveNote={this.saveNote}
						/>
					)}
				/>
			</StyledContainer>
		);
	}
}

export default App;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0;
`;
