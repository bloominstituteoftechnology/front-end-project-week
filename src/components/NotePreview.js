import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragSource, DropTarget } from 'react-dnd';
import { reArrange } from '../actions/index';
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
  
  overflow: hidden;


  h2 {
    padding: ${props => props.theme.dimensions.notePreview.headingPadding};
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.notePreview.headingFontSize};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    return { noteId: props.note.id };
  }
};

const noteTargetSpec = {
  drop(props, monitor) {
    const sourceId = monitor.getItem().noteId;
    const dropId = props.note.id;
    props.reArrange(sourceId, dropId);
  }
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const NotePreview = props => {
  const { title, textBody } = props.note;
  const { connectDropTarget, connectDragSource, isOver } = props;
  // const { color, font } = props.theme;
  return connectDropTarget(
    connectDragSource(
      <div style={ { display: 'flex', justifyContent: 'center' } }>
        <StyledNotePreview style={{ opacity: isOver ? .4 : 1 }}>
          <h2>{title}</h2>
          <MarkdownText mdText={textBody} plainText={true} />
        </StyledNotePreview>
      </div>
    )
  );
};

export default connect(null, { reArrange })(DropTarget(ItemTypes.NOTE, noteTargetSpec, collectTarget)(
  DragSource(ItemTypes.NOTE, noteSourceSpec, collectSource)(NotePreview)
));
