import React from "react";
import {Link} from "react-router-dom";
const Form = props => {
  console.log("form is working");
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
        <Link to='/'><button
          onClick={() => {
            props.addNewNote();
            props.history.push("/");
          }}
        >
          Add Note
        </button></Link>
      </form>
    </div>
  );
};
export default Form;
