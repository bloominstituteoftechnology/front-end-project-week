import React from "react";
import "../App.css";

export default function AddNote(props) {
  
  const addDelayer = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 250);
  };

  return (
    <div className="form">
      <div className="form-title">Create New Note:</div>

      <div className="form-body">
        <form onSubmit={props.onSaveHandler}>
          <textarea
            type="text"
            className="form-inputtitle"
            name="title"
            onChange={props.inputHandler}
            placeholder="Note Title"
            value={props.title}
          />
          <textarea
            type="text"
            className="form-inputnote"
            name="note"
            onChange={props.inputHandler}
            placeholder="Note Content"
            value={props.note}
          />

          <button className="form-button" onClick={addDelayer}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
