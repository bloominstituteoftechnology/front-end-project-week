import React from 'react';

const CreateNote = props => {

  return(
    <div className="Note-Form">
    <h3>Create New Note:</h3>
      <form onSubmit={props.addNote}>
        <input
          className="title-form"
          onChange={props.eHandler}
          placeholder="Note Title"
          value={props.values.title}
          name="newNoteTitle"
        />
        <input
          className="topic-form"
          onChange={props.eHandler}
          placeholder="Note Topic"
          value={props.values.topic}
          name="newNoteTopic"
        />
        <textarea
          className="text-form"
          onChange={props.eHandler}
          placeholder="Note Text..."
          value={props.values.text}
          name="newNoteText"
        ></textarea>
        <button type="submit">Save Note</button>
      </form>
    </div>
  )
}

export default CreateNote;
