import React from "react";
import {Link} from "react-router-dom";
const EditForm = props => {
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
            props.editNote(props.match.params.id);
          }}
        >
          Edit Note
        </button></Link>
      </form>
    </div>
  );
};
export default EditForm;