import React from "react";
const Form = props => {
    console.log('form is working')
  return (
    <div>
      <form>
        Title
        <input
          name="title"
          placeholder="title"
          onChange={props.handleChanges}
        />
        Note:
        <input
          name="textBody"
          placeholder=" Enter note"
          onChange={props.handleChanges}
        />
        <button onClick={props.addNewNote}>Add Note</button>
      </form>
    </div>
  );
};
export default Form;
