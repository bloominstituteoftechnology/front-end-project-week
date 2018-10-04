import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class IndividualNote extends Component {
	state = {
		id: '',
		title: '',
		textBody: '',
	};

	componentDidMount() {
		const {
			match: { params },
		} = this.props;
		this.fetchNote(params.id);
	}

	fetchNotes = (id) => {
		axios
			.get('https://killer-notes.herokuapp.com/note/get/{$id}')
			.then((response) => {
				this.setState(() => ({ note: response.data }));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	render() {
		return (
			<div className="IndividualNote">
				<Link to={`/notes/${props.note.id}`}>
					<h2>{this.props.title}</h2>
				</Link>
			</div>
		);
	}
}

export default IndividualNote;
