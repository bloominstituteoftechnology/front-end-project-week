import React from "react";
import "../components.css";
import "./index.css";

const Form = props => {
  // name buttons according to the current action
  const heading = props.type === "new" ? "Create New Note:" : "Edit Note:";
  const buttonName = props.type === "new" ? "Save" : "Update";

  return (
    <div className="main-container form">
      <h2>{heading}</h2>
      <form>
        <input
          type="text"
          name="title"
          maxLength="20"
          placeholder="Note Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <textarea
          type="text"
          name="content"
          placeholder="Note Content"
          value={props.content}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit}>{buttonName}</button>
      </form>
    </div>
  );
};

export default Form;
