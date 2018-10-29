// React
import React from 'react';
import { Link } from 'react-router-dom';

// Dependencies
import PropTypes from 'prop-types';

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
		this.props.deleteNote(this.props.note.id, this.props.history);
	}

	render() {
		const { note } = this.props;
		const { deleteModal } = this.state;

		return(
			<div className = 'main-content'>
				<div className = 'note-view'>
					<div className = 'edit-delete-wrapper'>
						<span><Link to = { `/edit/${ note.id }` }>edit</Link></span>
						<span onClick = { this.toggleDeleteModal }>delete</span>
						
						<div>
							<Modal 
								centered={ true } 
								isOpen={ deleteModal } 
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

					<h2>{ note.title }</h2>

					{ note.content.split('\n').map((str, i) => <p key = { i }>{ str }</p>) }
				</div>
			</div>
		);
	}
}

NoteView.propTypes = {
	deleteNote: PropTypes.func,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
	note: PropTypes.shape({
		content: PropTypes.string,
		id: PropTypes.number,
		title: PropTypes.string,
	}),
}

export default NoteView;
