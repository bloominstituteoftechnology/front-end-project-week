import React from 'react';

class SingleNote extends React.Component {
  deleteSpanClicked = (i, n) => {
    this.props.handleDeletePrompt(i, n);
  }

  editSpanClicked = (n) => {
    this.props.handleEditPrompt(n);
  }

  render() {
    const index = this.props.indexOfNote;
    const note = this.props.noteToShow;
    return (
      <div className="single-note">
        <p className="edit-delete"><span onClick={() => this.editSpanClicked(note)}>edit</span><span onClick={() => this.deleteSpanClicked(index, note)}>delete</span></p>
        <p className="sn-title">{this.props.noteToShow.noteTitle}</p>
        <p className="sn-content">{this.props.noteToShow.noteContent}</p>
      </div>
    );
  }
};

export default SingleNote;
