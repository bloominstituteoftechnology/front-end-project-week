import React, { Component } from 'react';
import { Notecard } from '../../style/style';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// import NoteView from './noteView';


class Note extends Component {

  render() { 
    console.log(this.props)
    const {id,title, content } = this.props.notes
    return ( 
      <Notecard>
        <div className="title">
        <p>{title}</p>
        </div>
        <div className="content">
        <p className="truncate"> {content}</p>
        </div>
        <Link to={`/noteView/${id}`}>
        <Button color="link">More... </Button>
        </Link>
      </Notecard>
    );
  }
}
 
export default Note;