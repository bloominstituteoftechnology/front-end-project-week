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
			<Route exact path="/" component={NoteContainer} />
			<Route path="/create-new-note/" component={NewNote} />
			<Route path="/note/:id" component={FullNote} />
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
