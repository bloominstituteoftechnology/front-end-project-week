import React from 'react';
import NoteContainer from './Components/Maincontent/NoteContainer';
import SidebarContainer from './Components/Sidebar/SidebarContainer';
import NewNote from './Components/Maincontent/NewNote';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

const App = (props) => {
	return (
		<StyledContainer>
			<Route path="*" render={() => <SidebarContainer />} />
			<Route exact path="/" render={() => <NoteContainer />} />
			<Route exact path="/create-new-note/" render={() => <NewNote />} />
		</StyledContainer>
	);
};

export default App;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 0;
`;
