import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import '../App.css';
import styled from 'styled-components';

export default class NoteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		};
	}

	componentDidMount() {
		axios
			.get('https://agile-bastion-89851.herokuapp.com/api/notes')
			.then(res => {
				this.setState(() => ({ notes: res.data }));
			})
			.catch(err => {
				console.error('Server Error', err);
			});
	}

	render() {
		return (
			<ListDive>
				<h3>Your Notes:</h3>
				<div className="list-view">
					{this.state.notes.map((n, i) => (
						<NoteCard key={i} note={n} />
					))}
				</div>
			</ListDive>
		);
	}
}

const ListDive = styled.div`
	box-sizing: border-box;
	display: flex;
	height: 100% vh;
	flex-direction: column;
	background-color: #f3f3f3;
	border: 1px solid #bebebe;
	padding: 0 30px;

	h3 {
		color: #4a494a;
		margin-top: 50px;
	}

	.list-view {
		display: flex;
		flex-wrap: wrap;
		margin: 20px auto;
		justify-content: space-between;
	}
`;
