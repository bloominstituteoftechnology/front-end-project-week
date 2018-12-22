import React from "react";
import { Link } from "react-router-dom";

const DeleteNote = props => {
  return (
    <form className="delete-container">
      <div className="delete-modal">
        <h4>Are you sure you want to delete this?</h4>
        <div className="d-modal-buttons">
        <Link to="/notes" className="d-Link">
          <div
            onClick={event =>
              props.deleteNote(event, props.match.params.id, props.history.push)
            } className="delete-button"
          >
            DELETE
          </div>
        </Link>
        <Link to="/notes" className="no-Link">
          <div className="no-button">NO</div>
        </Link>
          </div> 
      </div>
    </form>
  );
};

export default DeleteNote;
