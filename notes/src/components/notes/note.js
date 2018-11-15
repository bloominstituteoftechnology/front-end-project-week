import React, { Component } from 'react';
import { Notecard } from '../../style/style';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { truncate } from '../helpers/helpers'
// import NoteView from './noteView';


class Note extends Component {

  render() { 
    const {id, title, content } = this.props.notes
    return ( 
      <Notecard>
        <div className="title">
        <p>{title}</p>
        </div>
        <Link className="content-link" to={`/noteView/${id}`}>
        <div className="content">
        <p> {truncate(content,450,'...')}</p>
        </div>
        </Link>
      </Notecard>
    );
  }
}
 
export default Note;