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
	height: 100%;
	min-height: 100vh;
`;

const Sidebar = styled.div`
	background-color: lightgrey;
	width: 340px;
	display: flex;
	flex-direction: column;
	border-right: 1px solid darkgrey;
`;

const Main = styled.div`
	background-color: whitesmoke;
	width: 100%;
`;

const Title = styled.h1`
	margin: 20px;
`;

export const SideBarButton = styled(Link)`
	background-color: teal;
	margin: 10px 20px;
	text-align: center;
	padding: 15px 0;
	text-decoration: none;
	font-weight: bold;
	color: white;
	border: 1px solid darkgrey;
	font-size: 1.4rem;
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
						<SideBarButton to='/' onClick={()=>this.props.getNotes()}> View Your Notes </SideBarButton>
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
