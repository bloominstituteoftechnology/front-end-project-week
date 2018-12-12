//rendered by EditBar component

import React, { Component } from 'react';

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchNote(id);
  }
//fetchNote lives in app.js
  
  render() {
    if (!this.props.singleNote) {
      return <div>Loading note information...</div>;
    }
    
    const { title, content} = this.props.singleNote[0];
    return (
      <div className="NewForm">
        <form onSubmit={event => this.props.editNote(event,this.props.match.params.id)}>
          <input
            type="text"
            onChange={this.props.handleInputChange}
            placeholder={title}
            value={this.props.editedTitle}
            name="editedTitle"
          />
          <input
            type="text"
            onChange={this.props.handleInputChange}
            placeholder={content}
            value={this.props.editedNote}
            name="editedNote"
          />
          <button type="submit">Save Edits</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;

