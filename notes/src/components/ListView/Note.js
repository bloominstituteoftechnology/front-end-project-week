import React from 'react';
import { Link } from 'react-router-dom';

import './note.css';

class Note extends React.Component {
    constructor(props){
        super()
    }

    
    render() {
      return (
        <div className="note">
          <Link to={`/note/${this.props.id}`} style={{textDecoration: 'none'}}>
            <div className="noteTitle">{this.props.title}</div>
          </Link>
         <div className="noteText">{this.props.text.slice(0, 110)}...</div>
        </div>
      );
    }
  }
  
  export default Note;