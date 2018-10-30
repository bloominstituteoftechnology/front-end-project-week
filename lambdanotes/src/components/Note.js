import React, { Component } from 'react';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { Link } from 'react-router-dom';

export default class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: null,
			modal: false
		};
	}

	componentDidMount() {
		console.log(this.props);
		const id = this.props.match.params.id;
		this.fetchNote(id);
	}

	fetchNote = id => {
		axios
			.get(`https://agile-bastion-89851.herokuapp.com/api/notes/${id}`)
			.then(res => {
				this.setState(() => ({ note: res.data }));
			})
			.catch(err => {
				console.error(err);
			});
	};

	deleteNote = id => {
		axios
			.delete(`https://agile-bastion-89851.herokuapp.com/api/notes/${id}`)
			.then(() => {
				this.props.history.push('/');
			})
			.catch(err => {
				console.error(err);
			});
	};

	toggleModal = () => {
		this.setState({ modal: !this.state.modal });
	};

	render() {
		if (!this.state.note) {
			return <div>Loading note...</div>;
		}
		return (
			<OneNote>
				<div className="note-container">
					<div className="note-action">
						<button>
							<Link
								style={{ textDecoration: 'none', color: '#000000' }}
								to={{
									pathname: `/notes/${this.state.note.id}/edit`,
									state: this.state.note
								}}
							>
								edit
							</Link>
						</button>
						{/* onClick={() => this.props.history.push(`/notes/${this.state.note._id}/edit`)}>edit</button> */}
						<button className="links" onClick={this.toggleModal}>
							delete
						</button>
						{/* <div style={{textDecoration: 'underline'}}onClick={()=> this.deleteNote(this.state.note._id)}>delete</div> */}
						<Modal
							isOpen={this.state.modal}
							toggle={this.toggleModal}
							modalTransition={{ timeout: 200 }}
						>
							<ModalHeader toggle={this.toggle}>
								Delete Confirmation
							</ModalHeader>
							<ModalBody>Are you sure you want to delete this?</ModalBody>
							<ModalFooter>
								<button
									className="delete"
									onClick={() => this.deleteNote(this.state.note.id)}
								>
									Delete
								</button>
								<button className="cancel" onClick={this.toggleModal}>
									No
								</button>
							</ModalFooter>
						</Modal>
					</div>
					<h3>{this.state.note.title}</h3>
					<Markdown>{this.state.note.content}</Markdown>
				</div>
			</OneNote>
		);
	}
}

const OneNote = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 1000px;
	min-width: 1000px;
	background-color: #f3f3f3;
	border: 1px solid #bebebe;
	padding: 0 30px;

	h3 {
		color: #4a494a;
		margin-top: 50px;
	}

	.note-container {
		max-width: 650px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.note-action {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;

		.links {
			margin: 0 20px;
			color: #000000;
		}
	}
`;
