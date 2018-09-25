// React
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody } from 'reactstrap';

class NoteView extends React.Component {
	state = {
		deleteModal: false,
	};

	toggleDeleteModal = () => {
		this.setState({ deleteModal: !this.state.deleteModal });
	}

	deleteNote = () => {
		this.props.deleteNote(this.props.note._id, this.props.history);
	}

	render() {
		return(
			<div className = 'main-content'>
				<div className = 'note-view'>
					<div className = 'edit-delete-wrapper'>
						<span><Link to = { `/edit/${ this.props.note._id }` }>edit</Link></span>
						<span onClick = { this.toggleDeleteModal }>delete</span>
						
						<div>
							<Modal 
								centered={ true } 
								isOpen={ this.state.deleteModal } 
								toggle={ this.toggleDeleteModal } 
							>
								<ModalBody>
									<p>Are you sure you want to delete this?</p>

									<div className = 'modal-btns'>
										<div 
											className = 'btn save-btn delete-btn' 
											onClick = { this.deleteNote } 
										>Delete</div>
										<div 
											className = 'btn save-btn no-btn' 
											onClick = { this.toggleDeleteModal } 
										>No</div>
									</div>
								</ModalBody>
							</Modal>
						</div>
					</div>

					<h2>{ this.props.note.title }</h2>

					{ this.props.note.textBody.split('\n').map((str, i) => <p key = { i }>{ str }</p>) }
				</div>
			</div>
		);
	}
}

export default NoteView;
