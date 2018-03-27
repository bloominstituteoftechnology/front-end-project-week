import React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from 'reactstrap';

const DeleteModal = props => {
	return (
		<Modal className="Popup">
			<ModalBody className="Popup__Contents">
				<p>Are you sure you want to delete this?</p>
					<Link to={"/"}><button type="button" onClick={() => 
						{props.handleDelete(props.id)}} className="Popup__Button-Delete" > Delete 
						</button></Link>
					<button type="button" onClick={() => { props.toggleModal()}} 
					className="Popup__Button-No" > No </button>
			</ModalBody>
		</Modal>
	);
};

export default DeleteModal;
