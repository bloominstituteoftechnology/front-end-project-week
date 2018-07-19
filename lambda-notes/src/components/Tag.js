import React from 'react';
import styled from 'styled-components';
import { ItemTypes } from '../dndLogic';
import { DragSource } from 'react-dnd';

const StyledTagSource = styled.div`
  min-width: ${props => props.theme.dimensions.tagDisplay.tagWidth};
  height: ${props => props.theme.dimensions.tagDisplay.tagHeight};
  margin: ${props => props.theme.dimensions.tagDisplay.tagMargin};
  padding: ${props => props.theme.dimensions.tagDisplay.tagPadding};
  border-radius: ${props => props.theme.dimensions.tagDisplay.borderRadius};
  border-width: ${props => props.theme.dimensions.tagDisplay.borderWidth};
  border-style: solid;
  border-color: ${props => props.theme.color.border};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.tagBG};
  overflow-wrap: break-word;
  overflow: hidden;

  h3 {
    font-size: ${props => props.theme.dimensions.tagDisplay.fontSize};
    color: ${props => props.theme.color.tagText};
  }
`;

const tagSource = {
  beginDrag(props) {
    return { tagId: props.id };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Tag = ({ id, tag, isDragging, connectDragSource }) => {
  return (
    <StyledTagSource
      id={id}
      innerRef={innerRef => connectDragSource(innerRef)}
      style={{
        opacity: isDragging ? 0.8 : 1,
        margin: isDragging ? 0 : null,
      }}
    >
      <h3>{tag}</h3>
    </StyledTagSource>
  );
};

export default DragSource(ItemTypes.TAG, tagSource, collect)(Tag);
