import React from 'react';
import NoteContainer from './Components/Maincontent/NoteContainer';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import NewNote from './Components/Maincontent/NewNote';
import styled from 'styled-components';
import FullNote from './Components/Maincontent/FullNote';
import { Route } from 'react-router-dom';
// import Navbar from './Components/NavBar/Navbar';

const App = (props) => {
	return (
		<StyledContainer>
			<Route path="*" render={() => <SidebarContainer />} />
			<Route path="/" render={(props) => <NoteContainer {...props} getAllNotes={props.getAllNotes} />} />
			<Route exact path="/create-new-note/" render={(props) => <NewNote {...props} />} />
			<Route exact path="/note/:id" render={(props) => <FullNote {...props} />} />
			{/* <Route exact path="/note/:id" render={(props) => <Navbar {...props} />} /> */}
		</StyledContainer>
	);
};

export default App;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0;
`;
