import React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../dndLogic';
import trashIcon from '../assets/trash-icon.svg';

const StyledTagDeleteTarget = styled.img`
  margin: ${props => props.theme.dimensions.tagDisplay.tagMargin};

`;

const deleteTarget = {
  drop(props, monitor) {
    const { tagId } = monitor.getItem();
    props.deleteTag(tagId);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const TagDeleteTarget = ({ connectDropTarget, isOver, canDrop }) => {
  // if (isOver) {alert('is over!');}
  return (
    <StyledTagDeleteTarget
      src={trashIcon}
      alt="trashcan"
      height={isOver ? '30px' : '25px' }

      innerRef={innerRef => connectDropTarget(innerRef)} />
  );
};

export default DropTarget(ItemTypes.TAG, deleteTarget, collect)(
  TagDeleteTarget
);
