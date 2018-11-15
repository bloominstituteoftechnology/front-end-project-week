import React from 'react';

import './note.css';

class Note extends React.Component {
    constructor(props){
        super()
    }

    
    render() {
      return (
        <div className="note">
         <div className="noteTitle">{this.props.title}</div>
         <div className="noteText">{this.props.text.slice(0, 110)}...</div>
        </div>
      );
    }
  }
  
  export default Note;