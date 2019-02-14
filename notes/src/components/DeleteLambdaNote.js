import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import './DeleteLambdaNote.css';

class DeleteLambdaNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal 
		});
	}

	render() {
		return (
			<div>
				<Button className="delete-link"
				style={{
					backgroundColor: '#fff',
					border: 'none',
					color: '#000',
					padding: '5px',
					margin: '5px',
					textAlign: 'center'
				}}
				onClick={this.toggle}
				>
					Delete
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>
						Confirm Deletion?
					</ModalHeader>
					<ModalFooter>
						<Link to="/">
							<Button
								style={{
									backgroundColor: '#E60000'
								}}
								onClick={this.toggle}
							>Confirmed
							</Button>
						</Link>
						<Button style={{backgroundColor: 'aqua'}} onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export default DeleteLambdaNote;