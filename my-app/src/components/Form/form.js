import React from "react";

const Form = props => {
  // name buttons according to action
  const heading = props.type === "new" ? "Create Note:" : "Edit Note:";
  const buttonName = props.type === "new" ? "Save" : "Update";

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={props.title}
          onChange={props.handleInputChange}
        />
        <textarea
          name="textBody"
          cols="30"
          rows="10"
          value={props.textBody}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit} />
      </form>
    </div>
  );
};

export default Form;
