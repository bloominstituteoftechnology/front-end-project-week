import React from "react";
import "./fourm.css";
function Fourm(props) {
  const clickHandle = e => {
    e.preventDefault();
    props.addNewNote();
    props.history.push("/");
  };

  return (
    <>
      <div className="fourm-container">
        <h2>Create New Note:</h2>
        <form className="fourm">
          <div className="input-container">
            <input
              className="title-input"
              type="text"
              name="title"
              placeholder="Note title"
              value={props.note.title}
              onChange={props.changeHandler}
            />
            <textarea
              className="textbody-input"
              type="text"
              name="textBody"
              placeholder="Note content"
              value={props.note.textBody}
              onChange={props.changeHandler}
            />
          </div>
          <button className="fourm-button" type="submit" onClick={clickHandle}>
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Fourm;
