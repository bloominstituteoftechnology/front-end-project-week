import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchData, searchData } from '../actions';

import Search from '../components/Notes/Search';
import NoteCard from '../components/Notes/NoteCard';

class NotesView extends Component {
	state = {
		searchInput: '',
	};

	componentDidMount() {
		if (this.props.notes.length === 0) {
			this.props.fetchData();
		}
	}

	handleInput = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSearch = event => {
		event.preventDefault();
		console.log('handleSearch');
		this.state.searchInput === ''
			? this.props.fetchData()
			: this.props.searchData(this.state.searchInput);
	};

	render() {
		if (this.props.fetchingData) {
			return <Title>Loading notes...</Title>;
		}
		return (
			console.log(this.props.notes),
			(
				<Container>
					<Search handleInput={this.handleInput} handleSearch={this.handleSearch} {...this.state} />
					<Title> Your Notes:</Title>
					<List>
						{this.props.notes.length === 0 ? (
							<Title>No notes to see! Go add some!</Title>
						) : (
							this.props.notes.map(note => {
								return <NoteCard note={note} key={note.id} />;
							})
						)}
					</List>
				</Container>
			)
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);
	return {
		notes: state.notesReducer.notes,
		fetchingData: state.notesReducer.fetchingData,
	};
};

export default connect(
	mapStateToProps,
	{
		fetchData,
		searchData,
	}
)(NotesView);

const Container = styled.div`
	width: 100%;
`;

const List = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 600;
`;
