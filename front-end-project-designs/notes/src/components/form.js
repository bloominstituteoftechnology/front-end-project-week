import React from "react";
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
        <button
        //  onClick={() => {
        //   this.props.handleDelete(this.state.singleNote._id);
        //   this.props.getNote();
        //   this.props.history.push("/");
        // }}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};
export default Form;
