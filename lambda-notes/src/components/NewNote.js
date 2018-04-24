import React from "react";

export const NewNote = ({ history, addNote }) => {
  let titleInput;
  let textInput;

  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="col-3 notes__head">
          <h4>Create New Note:</h4>
        </div>
      </div>
      <div className="row">
        <form
          className="add__form"
          onSubmit={event => {
            event.preventDefault();
            addNote({ title: titleInput.value, text: textInput.value });
            history.push("/");
          }}
        >
          <input
            className="input__title"
            ref={title => (titleInput = title)}
            placeholder="Note Title"
          />
          <textarea
            cols="66"
            rows="20"
            className="input__text"
            ref={text => (textInput = text)}
            placeholder="Note Content"
          />
          <button type="submit" className="save__button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
