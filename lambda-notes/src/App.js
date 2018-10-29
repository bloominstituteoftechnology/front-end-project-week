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
		return (
			<StyledContainer>
				<Route path="/" render={(props) => <SidebarContainer {...props} />} />
				<Route exact path="/" render={(props) => <NoteContainer {...props} notes={this.state.notes} />} />
				<Route exact path="/create-new-note" render={(props) => <NewNote {...props} />} />
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
