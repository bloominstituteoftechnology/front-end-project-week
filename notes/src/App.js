import React, { Component } from "react";
import { getNotes } from "./actions";
import { connect } from "react-redux";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { withRouter, Route, Link } from "react-router-dom";
import { ListView, CreateView, NoteView, EditView } from "./components";

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100%;
	min-height: 100vh;
`;

const Sidebar = styled.div`
	background-color: lightgrey;
	width: 255px;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-right: 1px solid darkgrey;
	position: fixed;
	top: 0px;
	left: 0px;

	@media (max-width: 540px) {
		width: 100%;
		position: relative;
		padding-bottom: 15px;
		text-align: center;
	}
`;

const Main = styled.div`
	margin-left: 255px;
	height: 100%;

	@media (max-width: 540px) {
		margin-left: 0px;
		justify-content: center;
	}
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

const Form = styled.form`
	margin: 10px 20px;
	border: 1px solid darkgrey;
	background-color: white;
`;

const Input = styled.input`
	border: none;
	text-align: center;
	padding: 14px 0;
	text-decoration: none;
	font-weight: bold;
	color: teal;
	font-size: 1.4rem;
	width: 100%;
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			filter: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	componentDidMount() {
		this.props.getNotes();
	}

	filterNotes() {
		if (this.state.filter === "") return this.props.notes;
		return this.props.notes.filter(note => {
			return JSON.stringify(note)
				.toLowerCase()
				.includes(this.state.filter.toLowerCase());
		});
	}

	render() {
		return (
			<>
				<GlobalStyle />
				<AppWrapper>
					<Sidebar>
						<Title>Lambda Notes</Title>
						<SideBarButton
							to='/'
							onClick={() => this.props.getNotes()}>
							View Your Notes
						</SideBarButton>
						<SideBarButton to='/create'>
							+ Create New Note
						</SideBarButton>
						<Route
							exact
							path='/'
							render={props => (
								<Form {...props}>
									<Input
										name='filter'
										type='text'
										value={this.state.filter}
										placeholder='Search...'
										onChange={this.handleChange}
									/>
								</Form>
							)}
						/>
					</Sidebar>
					<Main>
						<Route
							exact
							path='/'
							render={props => (
								<ListView
									{...props}
									notes={this.filterNotes()}
								/>
							)}
						/>
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
		{ getNotes }
	)(App)
);
