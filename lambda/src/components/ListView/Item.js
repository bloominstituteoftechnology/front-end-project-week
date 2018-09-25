import React from 'react';
import {
  NoteItem,
  H1,
  NoteTitle,
  P,
  H3,
  H4,
  Tag,
  Tags
} from '../StyledComponents';
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
          <Tags>
            {this.props.tags.map(tag => (
              <Tag color={getRandomColor}>{tag}</Tag>
            ))}
          </Tags>
        </NoteItem>
      </Draggable>
    );
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default Item;
