import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { getNote, deleteNote, editNote } from "../actions";

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
		// console.log('mounted', id)
		this.props.getNote(id);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	onDeleteClick() {
		const id = this.props.match.params.id;
		this.props.deleteNote(id, () => {
			this.props.history.push("/");
		});
	}
	onEditClick() {
		const id = this.props.match.params.id;
		this.props.editNote(id, () => {
			this.props.history.push("/");
		});
	}

	render() {
		// console.log(this.props.note)
		const { note } = this.props;

		if (!note) {
			return <div>Loading...</div>;
		}
		return (
			// <div class="modal" tabindex="-1" role="dialog">
			// 	<div class="modal-dialog" role="document">
			// 		<div class="modal-content">
			// 			<div class="modal-header">
			// 				<h5 class="modal-title">Are you sure you want to delete this?</h5>
			// 				{/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			//   				<span aria-hidden="true">&times;</span>
			// 				</button> */}
			// 			</div>
			// 			<div class="modal-body">
			// 				<p>Modal body text goes here.</p>
			// 			</div>
			// 			<div className="d-flex">
			// 				<div class="modal-footer m-3">
			// 					<Link to="/notesList">
			// 						<button
			// 							className="btn btn-danger pull-xs-right"
			// 							onClick={this.onDeleteClick.bind(this)}>
			// 							Delete
			// 						</button>
			// 					</Link>
			// 					<button
			// 						type="button"
			// 						class="btn btn-secondary m-3"
			// 						data-dismiss="modal">
			// 						No
			// 					</button>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<h3>{this.props.note.title}</h3>
			// 	<p>{this.props.note.content}</p>
			// </div>

			<div className="container">
				<div className="mt3 d-flex justify-content-end">
					<Button className="m-1" color="danger" onClick={this.toggle}>
						Delete
					</Button>
					<Button className="m-1" color="secondary" onClick={this.onEditClick.bind(this)}>
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
					{/* <ModalBody>
          </ModalBody> */}
					<ModalFooter>
						<Link to="/notesList">
							<Button color="primary" onClick={this.onDeleteClick.bind(this)}>
								Delete
							</Button>{" "}
						</Link>
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

			// <div>
			// 	<Link to="/notesList">
			// 		<button
			// 			className="btn btn-danger pull-xs-right"
			// 			onClick={this.onDeleteClick.bind(this)}>
			// 			Delete
			// 		</button>
			// 	</Link>
			// 	<button
			// 		className="btn btn-secondary pull-xs-right"
			// 		// onClick={this.onEditClick.bind(this)}
			// 	>
			// 		Edit
			// 	</button>
			// 	<h3>{this.props.note.title}</h3>
			// 	<p>{this.props.note.content}</p>
			// </div>
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
	deleteNote,
	editNote,
})(Note);
