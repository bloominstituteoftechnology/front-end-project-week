import React from "react";

export const EditNote = ({ notes, updateNote, match, history }) => {
  let titleInput;
  let textInput;

  const note = notes
    .filter(note => note.id === parseInt(match.params.id, 10))
    .shift();

  // const handleEdit = event => {
  //   event.preventDefault();
  //   updateNote({
  //     id: match.params.id,
  //     title: titleInput.value,
  //     text: textInput.value
  //   });
  //   history.push(`/viewnote/${match.params.id}`);
  // };
  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="col-3 notes__head">
          <h4>Edit Note:</h4>
        </div>
      </div>
      <div className="row">
        <form
          className="add__form"
          onSubmit={event => {
            event.preventDefault();
            updateNote({
              id: match.params.id,
              title: titleInput.value,
              text: textInput.value
            });
            history.push(`/viewnote/${match.params.id}`);
          }}
        >
          <input
            className="input__title"
            ref={title => (titleInput = title)}
            placeholder={note.title}
            required
          />
          <textarea
            cols="66"
            rows="20"
            className="input__text"
            ref={text => (textInput = text)}
            placeholder={note.text}
            required
          />
          <button type="submit" className="save__button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
