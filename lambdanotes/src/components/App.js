// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import SideBar from './SideBar';
import NoteListPage from './NoteListPage';
import NotePage from './NotePage';
import NewNotePage from './NewNotePage';
// import EditNote from './EditNote';

const AppContainer = styled.div`
	display: flex;
	max-width: 888px;
	min-height: 888px;
	background: #f3f3f3;
	border: 1px solid #9a9a9a;
	margin: 16px auto;
`;

class App extends Component {
	render() {
		return (
			<AppContainer>
				<SideBar />
				<p>`{process.env.REACT_APP_DB}`</p>
				<Route exact path="/" component={NoteListPage} />
				<Route path={`/note/:id`} component={NotePage} />
				<Route path="/new" component={NewNotePage} />
				{/* <Route path="/edit" component={EditNote} /> */}
			</AppContainer>
		);
	}
}

export default App;
