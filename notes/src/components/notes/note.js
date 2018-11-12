import React, { Component } from 'react';
import { Notecard } from '../../style/style';


class Note extends Component {
  render() { 
    const { title, content } = this.props.notes
    return ( 
      <Notecard>
        <div className="title">
        <p>{title}</p>
        </div>
        <div className="content">
        <p className="truncate"> {content}</p>
        </div>
      </Notecard>
    );
  }
}
 
export default Note;