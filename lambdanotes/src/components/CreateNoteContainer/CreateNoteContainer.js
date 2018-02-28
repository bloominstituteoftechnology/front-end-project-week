import React from 'react';

class CreateNoteContainer extends React.Component {
  state = {
    noteTitle: '',
    noteContent: ''
  }

  submitNote = (e) => {
    e.preventDefault();
    this.props.handleClickForSave(this.state);
  }

  newTitle = (e) => {
    this.setState({
      noteTitle: e.target.value
    });
  };

  newContent = (e) => {
    this.setState({
      noteContent: e.target.value
    });
  };

  render() {
    return (
      <div className="create-note-container">
        <p className="cn-line"> Create New Note: </p>
        <form>
        <p><textarea className="noteTitleInputBox" type="text" placeholder="Note Title" onChange={this.newTitle} /></p>
        <p><textarea className="noteContentInputBox" type="text" placeholder="Note Content" onChange={this.newContent} /></p>
        <p><button className="save-button" onClick={(e) => {this.submitNote(e)}}>Save</button></p>
        </form>
      </div>
    );
  }
};

export default CreateNoteContainer;
