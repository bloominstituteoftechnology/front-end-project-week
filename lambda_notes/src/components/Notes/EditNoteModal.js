import React from 'react';
import './DeleteModal.css'

const EditNoteModal = props => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Note Updated!</p>
        <button
          type="button"
          onClick={props.getNotes}
        >
          Okay
        </button>
      </section>
    </div>
  );
};

export default EditNoteModal;
