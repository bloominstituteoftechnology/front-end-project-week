import React from 'react';
import { NoteItem, H1, NoteTitle, P, H3, H4 } from '../StyledComponents';
// import { Draggable } from 'react-draggable'
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
class Item extends React.Component {
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable {...dragHandlers}>
        <NoteItem onClick={this.props.onClick}>
          <NoteTitle>
            <H4>{this.props.title}</H4>
          </NoteTitle>
          <P>{this.props.textBody}</P>
        </NoteItem>
      </Draggable>
    );
  }
}

export default Item;
