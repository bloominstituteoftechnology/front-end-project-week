import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Button, Modal, ModalBody } from 'reactstrap';


class NoteView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	handleDelete = () => {
		this.toggleModal();
		this.props.deleteNotecard(this.props.selectedNotecard.title);
		this.props.history.push('/');
	}

	toggleModal = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<Row>
					<Col>
				<Link to ='/EditView'><Button>Edit</Button></Link>
				<Button onClick={ () => this.toggleModal() }>Delete</Button>
				{this.state.modal ? <Modal isOpen={this.state.modal}>
					<ModalBody>
						Are you sure you want to delete this?
					</ModalBody>
					<div>
						<Link to='/' onClick={() => this.handleDelete() }>
							<Button>Delete</Button>
						</Link>
						<Button onClick={() => this.toggleModal()}>No</Button>
					</div>
				</Modal> : null}

					</Col>
				</Row>
				<Row>
					<Col>
						<h3>{this.props.selectedNotecard.title}</h3>
						<p>{this.props.selectedNotecard.content}</p>
					</Col>
				</Row>
			</div>
			);
				}
				}

export default withRouter(NoteView);
