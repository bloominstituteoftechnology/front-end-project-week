import React from "react";
import "../App.css";

export default function Edit(props) {
  
  const linkHome = () => {
    setTimeout(() => {
      props.history.push("/");
    }, 250);
  };

  return (
    <div className="form">
      <div className="form-title">Edit Note:</div>

      <div className="form-body">
        <form onSubmit={e => props.onUpdateHandler(e, props.match.params.id)}>
          <textarea
            type="text"
            className="form-inputtitle"
            name="title"
            onChange={props.inputHandlerUpdate}
            placeholder="Note Title"
            value={props.title}
          />
          <textarea
            type="text"
            className="form-inputnote"
            name="note"
            onChange={props.inputHandlerUpdate}
            placeholder="Note Content"
            value={props.note}
          />

          <button className="form-button" onClick={linkHome}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
