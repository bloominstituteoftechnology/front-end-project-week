import React from "react";

import "../styles/App.css";
import "../styles/NotePage.css";
import "../styles/Sidebar.css";

const NotePage = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );

    const deleteHandler = e => {
      e.preventDefault();
      props.deleteNote(note._id);
      props.history.push("/");
    };

    if (props.modal) {
      return (
        <>
          <div className="modalWrapper">
            <div className="modal">
              <p>Are you sure you want to delete this?</p>
              <div className="modalButtonBox">
                <div
                  className="first modalButton"
                  onClick={(e) => {
                    props.modalHandler();
                    deleteHandler(e);
                  }}
                >
                  Delete
                </div>
                <div
                  className="second modalButton"
                  onClick={() => props.modalHandler()}
                >
                  No
                </div>
              </div>
            </div>
          </div>

          <div className="modalBackground" />
          <div className="componentContainer">
            <div className="spanButtonsContainer">
              <a href={`/note/${note._id}/edit`}>edit</a>
              <span>delete</span>
            </div>
            <h2>{note.title}</h2>
            <p className="noteText">{note.textBody}</p>
          </div>
        </>
      );
    } else {
      return (
        <div className="componentContainer">
          <div className="spanButtonsContainer">
            <a href={`/note/${note._id}/edit`}>edit</a>
            <span onClick={() => props.modalHandler()}>delete</span>
          </div>
          <h2>{note.title}</h2>
          <p className="noteText">{note.textBody}</p>
        </div>
      );
    }
  } else {
    return <p>Loading...</p>;
  }
};

export default NotePage;
