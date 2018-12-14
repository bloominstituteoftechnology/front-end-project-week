import React, { Component } from 'react';
import { GlobalStyle, AppContainer, Input, Form } from './style';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSVLink } from 'react-csv';
import {
	requestNotes,
	addNote,
	editNote,
	deleteNote,
	sorting,
	searching
} from './actions';
import SideNav from './components/SideNav';
import NoteList from './components/NoteList';
import NoteSingle from './components/NoteSingle';
import ConfirmDelete from './components/ConfirmDelete';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'default',
			searchTerm: ''
		};
	}

	componentDidMount() {
		this.props.requestNotes();
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
		if (event.target.value.length === 0) {
			this.props.requestNotes();
		}
	};
	addNote = (note) => {
		this.props.addNote(note);
	};

	editNote = (note, id) => {
		this.props.editNote(note, id);
	};

	deleteNote = (id) => {
		this.props.deleteNote(id);
	};

	toggleMode = (mode) => {
		this.setState({
			...this.state,
			mode
		});
	};
	sort = () => {
		this.props.sorting();
	};

	search = (e) => {
		e.preventDefault();
		console.log(this.state.searchTerm);
		this.props.searching(this.state.searchTerm);
	};

	
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />

				<AppContainer>
					<CSVLink
						data={this.props.notes}
						filename={'notes.csv'}
						target="_blank"
						style={{
							fontSize: '2rem',
							color: 'white',
							position: 'absolute',
							right: '11%',
							zIndex: '99',
							bottom: '5%',
							textDecoration: 'none',
							fontFamily: 'cursive',
						}}
					>
						Export Notes
					</CSVLink>
					<Form component="main" onSubmit={(event) => this.search(event)}>
						<Input
							name="searchTerm"
							component="main"
							onChange={(e) => this.handleChange(e)}
							placeholder={'search notes...'}
							type="text"
						/>
					</Form>
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
								notes={this.props.notes}
								mode={this.state.mode}
								toggleMode={this.toggleMode}
								addNote={this.addNote}
								id={this.props.newId}
								onDragOver={this.onDragOver}
								onDrop={this.onDrop}
								onDragStart={this.onDragStart}
								sort={this.sort}
								search={this.search}
							/>
						)}
					/>

					<Route
						path={'/:id'}
						render={(props) => (
							<React.Fragment>
								<NoteSingle
									{...props}
									notes={this.props.notes}
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

const mapStateToProps = (state) => ({
	notes: state.notes,
	requestingData: state.requestingData,
	newId: state.newId
});
export default connect(
	mapStateToProps,
	{
		requestNotes,
		addNote,
		editNote,
		deleteNote,
		sorting,
		searching
	}
)(App);
