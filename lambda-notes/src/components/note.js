import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

import { getNote, deleteNote } from "../actions";

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.getNote(id);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	onDeleteClick() {
		const id = this.props.match.params.id;
		this.props.deleteNote(id);
		setTimeout(() => {
			this.props.history.push("/notesList");
		}, 20);
	}

	render() {
		const { note } = this.props;

		if (!note) {
			return <div>Loading...</div>;
		}
		return (
			<div className="container">
				<div className="mt3 d-flex justify-content-end">
					<Button className="m-1" color="danger" onClick={this.toggle}>
						Delete
					</Button>
					<Button className="m-1" color="secondary">
						Edit
					</Button>
				</div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}>
					<ModalHeader toggle={this.toggle}>
						Are you sure you want to delete this?
					</ModalHeader>
					<ModalFooter>
							<Button color="primary" onClick={this.onDeleteClick.bind(this)}>
								Delete
							</Button>{" "}
						<Button color="secondary" onClick={this.toggle}>
							No
						</Button>
					</ModalFooter>
				</Modal>
				<div className="mt-5">
					<div className="mt-1">
						<h3>{this.props.note.title}</h3>
					</div>
					<div className="mt-4">
						<p>{this.props.note.content}</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		note: state.note
	};
};

export default connect(mapStateToProps, {
	getNote,
	deleteNote
})(Note);
