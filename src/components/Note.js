import React, { Component } from 'react';

class Note extends Component {
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      content: this.content.value
    };
    this.props.submitNote(formData, this.props.note.id);
  }

  onTagSubmit(e) {
    e.preventDefault();
    const formData = {
      name: this.name.value
    }
    this.props.submitTag(formData, this.props.note.id)
    this.props.closeTagForm();
  }

  onViewSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      content: this.content.value
    };
    this.props.submitNote(formData, this.props.note.id);
  }
  
  renderTagForm(note) {
    if ( note.id !== undefined) {
      if(!this.props.newTag) {
        return (
          <span>
            Tag your note:
            <button 
              className=""
              onClick={() => this.props.showTagForm()}
            >
              Add Tag
            </button>
          </span>
        );
      } else {
        return (
          <form onSubmit={(e) => this.onTagSubmit(e)}>
            <input
              className="tag-input"
              type="text"
              placeholder="Tag Name..."
              ref={(input) => this.name = input}
            />
          </form>
        );
      } 
    }
  }

  renderTags (note) {
    if (note.tags) {
      return note.tags.map((tag, index) =>
        <div
          className="tag"
          key={index}
          onClick={(e) => this.props.deleteTag(note.id, tag.id)}
        >
          <span className="delete">
            <button className="">Delete</button>
          </span>
          {tag.name}
        </div>
      );
    }
  }

  render() {
    const { note, closeTagForm } = this.props;
    return(
      <div className="note-container">
          <h2 id='title'>Create New Note</h2>
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
          onClick={() => closeTagForm()}
        >
          <div className="note-title">
            <input
              className="note-title-input"
              type="text"
              placeholder="Note Title..."
              defaultValue={note.title}
              ref={(input) => this.title = input}
            />
          </div>
          <div className="note-textarea-container">
            <textarea
              className="note-textarea"
              placeholder="Type Here..."
              defaultValue={note.content}
              ref={(input) => this.content = input}
            />
          </div>
          <input className="note-button" type="submit" value="Save" />
        </form>
        <div className="tag-container">
          <div className="tag-button-container">
            {this.renderTagForm(note)}
          </div>
          <div className="tag-list-container">
            {this.renderTags(note)}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;