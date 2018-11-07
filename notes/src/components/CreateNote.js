import React from "react";

const CreateNote = props => {
  const createNewNote = event => {
    props.addNote();
    props.history.push("/");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={props.title}
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Content"
          name="textBody"
          value={props.textBody}
          onChange={props.changeHandler}
        />
      </form>
      <button onClick={createNewNote}>Save</button>
    </div>
  );
};

export default CreateNote;
