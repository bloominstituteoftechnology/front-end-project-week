import React from 'react';

class EditNoteContainer extends React.Component {
    state = {
      noteTitle: this.props.noteToShow.noteTitle,
      noteContent: this.props.noteToShow.noteContent
    };

    updateNote = (e, i) => {
      e.preventDefault();
      this.props.handleClickForUpdate(this.state, i);
    }

    updateTitle = (e) => {
      this.setState({
          noteTitle: e.target.value
      });
    };

    updateContent = (e) => {
      this.setState({
          noteContent: e.target.value
      });
    };

  render() {
    const index = this.props.indexOfNote;
    return (
      <div className="edit-note-container">
        <p className="sn-title">Edit Note: </p>
        <form>
        <p><textarea className="noteTitleInputBox" type="text" value={this.state.noteTitle} onChange={this.updateTitle} /></p>
        <p><textarea className="noteContentInputBox" type="text" value={this.state.noteContent} onChange={this.updateContent} /></p>
        <p><button className="save-button" onClick={(e) => {this.updateNote(e, index)}}>Update</button></p>
        </form>
      </div>
    );
  }
};

export default EditNoteContainer;
