import React from "react";
import { Link } from "react-router-dom";

export const NoteView = props => {
  let denoted = props.notes.find(
    note => note.id === parseInt(props.match.params.id, 10)
  );
  if (props.notes.length > 0) {
    return (
      <div className="Container SingleNoteView">
        {props.showModal && (
          <div className="modal-wrap">
            <div className="modal-content">
              <h3 className="Header ModalHeader">
                Are you sure you want to delete this?
              </h3>
              <div className="modal-buttons">
                <Link to="">
                  {" "}
                  <div
                    className="delete-button"
                    onClick={() => {
                      props.deleteNote(denoted.id);
                      props.modalToggle();
                    }}
                  >
                    Delete
                  </div>
                </Link>
                <div className="no-button" onClick={() => props.modalToggle()}>
                  No
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="view-links">
          <Link className="edit-button" to={`/notes/${denoted.id}/edit`}>
            edit
          </Link>
          &nbsp; &nbsp;
          <div className="delete-link" onClick={() => props.modalToggle()}>
            delete
          </div>
        </div>
        <h3 className="Header">{denoted.title}</h3>
        <p className="NoteText">{denoted.text}</p>
      </div>
    );
  } else return <div>fixxx meeee</div>;
};
export default NoteView;
