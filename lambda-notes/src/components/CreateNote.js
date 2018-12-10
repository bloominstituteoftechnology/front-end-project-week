import React from "react";

class CreateNote extends React.Component {
  render() {
    return (
      <div className="create-note-wrapper">
        <h2>Create New Note:</h2>
        <form className="create-note-form" onSubmit={this.props.createNote}>
          <input
            className="create-note-title"
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.props.newNote.title}
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
          />
          <input
            className="create-note-text"
            type="text"
            placeholder="Note Content"
            name="content"
            value={this.props.newNote.content}
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
