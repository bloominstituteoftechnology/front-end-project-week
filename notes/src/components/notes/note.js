import React, { Component } from 'react';
import { Notecard } from '../../style/style';
import { Link } from 'react-router-dom';


class Note extends Component {
  render() { 
    console.log(this.props.notes)
    const {id, title, content } = this.props.notes
    return ( 
      <Notecard>
        <div className="title">
        <Link to={`/note/${id}`}>
        <p>{title}</p>
        </Link>
        </div>
        <div className="content">
        <p className="truncate"> {content}</p>
        </div>
      </Notecard>
    );
  }
}
 
export default Note;