import React from "react";
import "./fourm.css";
function EditFourm(props) {
  const clickHandle = e => {
    e.preventDefault();
    props.updateNote();
    props.history.push("/");
  };

  return (
    <>
      <div className="fourm-container">
        <h2>Edit Note:</h2>
        <form className="fourm">
          <div className="input-container">
            <input
              className="title-input"
              type="text"
              name="title"
              placeholder="title"
              value={props.note.title}
              onChange={props.changeHandler}
            />
            <textarea
              className="textbody-input"
              type="text"
              name="textBody"
              placeholder="content"
              value={props.note.textBody}
              onChange={props.changeHandler}
            />
          </div>
          <button className="fourm-button" type="submit" onClick={clickHandle}>
            Update
          </button>
        </form>
      </div>
    </>
  );
}
export default EditFourm;
