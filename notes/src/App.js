import React, { Component } from "react";
import { getNotes } from "./actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { withRouter, Route, Link } from "react-router-dom";
import { ListView, CreateView, NoteView, EditView } from "./components";

const AppWrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const Sidebar = styled.div`
	background-color: gray;
	width: 300px;
	display: flex;
	flex-direction: column;
`;

const Main = styled.div`
	background-color: lightgray;
	width: 100%;
`;

const Title = styled.h1`
	font-size: 4rem;
`;

const SideBarButton = styled(Link)`
	background-color: teal;
`;

class App extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<>
				<GlobalStyle />
				<AppWrapper>
					<Sidebar>
						<Title>Lambda Notes</Title>
						<SideBarButton to='/'> View Your Notes </SideBarButton>
						<SideBarButton to='/create'>
							+ Create New Note
						</SideBarButton>
					</Sidebar>
					<Main>
						<Route exact path='/' component={ListView} />
						<Route path='/create' component={CreateView} />
						<Route exact path='/note/:id' component={NoteView} />
						<Route exact path='/edit/:id' component={EditView} />
					</Main>
				</AppWrapper>
			</>
		);
	}
}

export default withRouter(
	connect(
		({ notes }) => ({ notes }),
		{
			getNotes
		}
	)(App)
);

//EDIT SYNTAX: $r.props.editNote("5c0a1d936215570015af895d", {title: "hello", textBody: "I AM A TRUE MASTER BANANARAMAJAMAMAMA!"})
