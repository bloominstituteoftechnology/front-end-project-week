import React from 'react';

class SingleNote extends React.Component {
  deleteSpanClicked = (index) => {
    this.props.handleDeletePrompt(index)
  }

  render() {
    const index = this.props.indexOfNote
    return (
      <div className="single-note">
        <p className="edit-delete"><span>edit</span><span onClick={() => this.deleteSpanClicked(index)}>delete</span></p>
        <p>{this.props.noteToShow.noteTitle}</p>
        <p>{this.props.noteToShow.noteContent}</p>
      </div>
    );
  }
};

export default SingleNote;
