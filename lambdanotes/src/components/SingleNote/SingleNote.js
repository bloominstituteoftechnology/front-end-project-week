import React from 'react';

class SingleNote extends React.Component {
  render() {
    return (
      <div className="single-note">
        <p className="edit-delete"><span>edit</span><span>delete</span></p>
        <p>{this.props.noteToShow.noteTitle}</p>
        <p>{this.props.noteToShow.noteContent}</p>
      </div>
    );
  }
};

export default SingleNote;
