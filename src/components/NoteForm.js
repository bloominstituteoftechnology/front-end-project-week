import React from "react";

const NoteForm = props => {
  const handleClick = () => {
    const newNote = {
      tags: props.newTags,
      title: props.title,
      contents: props.contents
    };
    props.postNotes(newNote);
    props.history.push(`/`);
  };

  return (
    <div>
      <div className="note-form">
        <header className="body-header">
          <div className="tags-container">
            <form className="tags-form" onSubmit={props.handleSubmitTag}>
              <div className="tags">
                {props.newTags.map(tag => {
                  return <p className="tag" key={tag}>{tag}</p>
                })}
              </div>
              <input
                className="input-tags"
                type="text"
                name="tag"
                value={props.tag}
                onChange={props.handleInput}
                onSubmit={props.handleSubmitTag}
                placeholder="add tags"
              />
            </form>
            <div className="btn-container">
              <button onClick={handleClick}>Save</button>
            </div>
          </div>
        </header>
        <hr></hr>
        <input
          className="input-title"
          type="text"
          name="title"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Title"
        />
        <textarea
          className="input-body"
          type="textarea"
          name="contents"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Start writing..."
        />

      </div>
    </div>
  );
};
export default NoteForm;