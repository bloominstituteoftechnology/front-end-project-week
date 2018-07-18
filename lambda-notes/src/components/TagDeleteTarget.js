import React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import {ItemTypes} from '../dndLogic';
import { deleteNote } from '../actions/index';
import trashIcon from '../assets/trash-icon.svg';

const StyledTagDeleteTarget = styled.img`
    margin: ${props => props.theme.dimensions.tagDisplay.tagMargin};
  }
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
  return connectDropTarget(
    <span><StyledTagDeleteTarget src={trashIcon} alt="trashcan" height="25px" /></span>
  );
};

export default DropTarget(ItemTypes.TAG, deleteTarget, collect)(TagDeleteTarget);