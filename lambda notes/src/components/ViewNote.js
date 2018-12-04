import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
// A lot of code is from Reactstrap documentation

class ViewNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			backdrop: true,
			toList: false
		};

		this.changeBackdrop = this.changeBackdrop.bind(this);
	}

	toggle = ()  => {
		this.setState({
			modal: !this.set.modal
		});
	};

	changeBackdrop(e) {
		let value = e.target.value;
		if (value !== 'static') {
			value = JSON.parse(value);
		}
		this.setState({ backdrop: value });
	}

	deleteHandler = event => {
		event.preventDefault();
		this.setState({ toList: true });
		this.props.deleteNote(this.props.match.params.id);
	};

	render() {
		console.log(this.props.match.params.id);
		if (this.state.toList) {
			return <Redirect to="/" />;
		}
		return (
			<div className="page-wrapper">
					<div className="action-btns">
						<Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
						<a onClick="{this.toggle}">Delete</a>
					</div>
				{this.props.notes.map(note => {
					if (this.props.match.params.id === note._id) {
						console.log(note.title);
						return (
							<div key={note._id}>
								<p className="ViewNoteTitle">{note.title}</p>
								<p className="ViewNoteText">{note.textBody}</p>
							</div>
						);
					}
				})}
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					backdrop={this.state.backdrop}
				>
					<ModalBody>
						<p>Are you sure you want to delete this?</p>
						<div>
							<Button color="danger" onClick={this.deleteHandler}>
								Delete
							</Button>
							<Button color="primary" onClick={this.toggle}>
								No 
							</Button> 
						</div>
					</ModalBody>
				</Modal>
			</div>	
		);
	}
}

export default ViewNote;