import React, {Component} from 'react';
import NoteStyled from '../styling/NoteStyled';

class Notes extends Component {

  render() {
    return(
      <NoteStyled>
        <h4>{this.props.noteTitle}</h4>
        <p>{this.props.text}</p>
      </NoteStyled>
    )
  }
}

export default Notes;

