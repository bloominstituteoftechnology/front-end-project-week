import React from "react";
import { Link } from "react-router-dom";

const DeleteModal = props => {
	return (
		<div className="Popup">
			<div className="Popup__Contents">
				<p>Are you sure you want to delete this?</p>
					<Link to={"/"}><button type="button" onClick={() => 
						{props.handleDeleteModal(props.id)}} className="Popup__Button-Delete" > Delete 
						</button></Link>
					<button type="button" onClick={() => { props.toggleModal()}} 
					className="Popup__Button-No" > No </button>
			</div>
		</div>
	);
};

export default DeleteModal;
