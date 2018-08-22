import React from "react";
import { Link } from "react-router-dom";

const DeleteModal = props => (
	<div
		className={
			props.deleteDisplay ? "Note__delete--shown" : "Note__delete--hidden"
		}
	>
		<div className="Note__delete-prompt">
			<h4>Are you sure you want to delete this?</h4>
			<div className="Note__delete-prompt-buttons">
				<Link to="/notes">
					<button
						className="Button Button--danger"
						onClick={props.onDelete}
					>
						Yes
					</button>
				</Link>
				<button className="Button" onClick={props.onClose}>
					No
				</button>
			</div>
		</div>
	</div>
);

export default DeleteModal;
