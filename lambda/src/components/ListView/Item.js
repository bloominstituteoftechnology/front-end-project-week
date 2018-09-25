import React from 'react';
import { NoteItem, NoteTitle, P, H4, Tag, Tags } from '../StyledComponents';
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
            {this.props.tags.map(tag => {
              const color = getRandomColor();
              return (
                <Tag key={tag} color={color}>
                  {tag}
                </Tag>
              );
            })}
          </Tags>
        </NoteItem>
      </Draggable>
    );
  }
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default Item;
