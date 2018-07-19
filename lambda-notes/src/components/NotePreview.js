import React from 'react';
import styled from 'styled-components';
import { DragSource, DropTarget } from 'react-dnd';
import MarkdownText from './MarkdownText';
import { ItemTypes } from '../dndLogic.js';

const StyledNotePreview = styled.div`
  width: ${props => props.theme.dimensions.notePreview.width};
  height: ${props => props.theme.dimensions.notePreview.height};
  border-color: ${props => props.theme.color.border};
  border-style: solid;
  border-width: ${props => props.theme.dimensions.notePreview.borderWidth};
  padding: ${props => props.theme.dimensions.notePreview.padding};
  background-color: ${props => props.theme.color.previewNoteBG};

  /* OVERFLOW LOGIC START */
  overflow: hidden;
  position: relative;

  :after {
    /* points in the end */
    content: '';
    /* absolute position */
    position: absolute;
    /* set position to right bottom corner of text */
    right: 0;
    /* set width and height */
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    /* bg color = bg color under block */
    background: ${props => props.theme.color.previewNoteBG};
  }
  /*OVERFLOW LOGIC END*/

  h2 {
    padding: ${props => props.theme.dimensions.notePreview.headingPadding};
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.notePreview.headingFontSize};
    overflow-wrap: break-word;
  }

  div {
    color: ${props => props.theme.color.generalText};
    font-size: ${props => props.theme.dimensions.notePreview.textFontSize};
    padding: ${props => props.theme.dimensions.notePreview.textPadding};
    border-top: ${props => props.theme.dimensions.notePreview.borderWidth} solid
      ${props => props.theme.color.border};
    line-height: ${props => props.theme.dimensions.notePreview.textLineHeight};
    overflow-wrap: break-word;
    white-space: line-pre;
  }
`;

const noteSourceSpec = {
  beginDrag(props) {
    return { noteId: props.note._id };
  }
};

const noteTargetSpec = {
	hover(props, monitor) {
    console.log(monitor.getItem());
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const NotePreview = props => {
  const { title, textBody } = props.note;
  const { connectDropTarget, connectDragSource, isOver } = props;
  // const { color, font } = props.theme;
  return connectDropTarget(connectDragSource(
    <div>
      <StyledNotePreview style={{ backgroundColor: isOver ? 'blue' : null }}>
        <h2>{title}</h2>
        <MarkdownText mdText={textBody} />
      </StyledNotePreview>
    </div>
  ));
};

export default DropTarget(ItemTypes.NOTE, noteTargetSpec, collectTarget)(DragSource(ItemTypes.NOTE, noteSourceSpec, collectSource)(
  NotePreview
));
