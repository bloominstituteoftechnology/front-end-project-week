import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
// A lot of code is from Reactstrap documentation

class DeleteNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: false
		};

		this.toggle =this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalBody>
						Are you sure you want to delete this?

							<Button color="danger" onClick={this.toggle}>
								<p>Delete</p>
							</Button>
							<Button color="primary" onClick={this.toggle}>
								No 
							</Button> 
					</ModalBody>	
					
				</Modal>
			</div>
		);
	}
}

export default DeleteNote;