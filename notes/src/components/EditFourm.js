import React from "react";

function EditFourm(props) {
  const clickHandle = e => {
    e.preventDefault();
    props.updateNote();
    props.history.push("/");
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={props.note.title}
          onChange={props.changeHandler}
        />
        <input
          type="text"
          name="textBody"
          placeholder="content"
          value={props.note.textBody}
          onChange={props.changeHandler}
        />
        <button type="submit" onClick={clickHandle}>
          Update
        </button>
      </form>
    </>
  );
}
export default EditFourm;
