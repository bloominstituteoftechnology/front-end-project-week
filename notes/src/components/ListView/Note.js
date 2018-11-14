import React from 'react';

class Note extends React.Component {
    render() {
      return (
        <div className="note">
         <div className="noteTitle">{this.props.title}</div>
         <div className="noteText">{this.props.text}</div>
        </div>
      );
    }
  }
  
  export default Note;