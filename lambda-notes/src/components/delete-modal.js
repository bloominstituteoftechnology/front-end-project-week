import React from "react";
import { Link } from "react-router-dom";

const DeleteModal = ({ id, handleDeleteModal, toggleModal }) => {
	return (
		<div className="Popup">
			<div className="Popup__Contents">
				<p>Are you sure you want to delete this?</p>
				<Link to="/"><button type="button" onClick={() =>
					{handleDeleteModal(id)}} className="Popup__Button-Delete"> Delete
				</button></Link>
				<button type="button" onClick={() => { toggleModal() }}
					className="Popup__Button-No" > No </button>
			</div>
		</div>
	);
};

export default DeleteModal;
