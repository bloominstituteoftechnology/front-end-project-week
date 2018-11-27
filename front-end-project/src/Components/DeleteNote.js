import React from 'react';
import './style.css';

const DeleteNote = props => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>DESTROY NOTE FROM EXISTANCE????</p>
        <button
          className="delete-btn"
          type="button"
          onClick={(e) => props.deleteNote(e, props.noteID)}
        >
          DESTROY
        </button>
        <button
          className="close-btn"
          type="button"
          onClick={props.hideModal}
        >
          No
        </button>
      </section>
    </div>
  );
}
export default DeleteNote;
