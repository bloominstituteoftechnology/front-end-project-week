import React from "react";

const CreateNote = props => {
  const submit = e => {
    e.preventDefault();
    props.buttonSubmitAdd();
    props.history.push("/");
    console.log("props", props);
  };

  return (
    <div>
      <h3>Create New Note: </h3>
      {/* <input
          type="text"
          placeholder="title"
          onChange={this.inputChange("title")}
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="Content"
          onChange={this.inputChange("content")}
          value={this.state.content}
        /> */}
      <form>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={props.inputChange("title")}
            value={props.title}
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            onChange={props.inputChange("content")}
            value={props.content}
          />
        </div>
        <button onClick={submit}>Save</button>{" "}
      </form>
    </div>
  );
};

export default CreateNote;
