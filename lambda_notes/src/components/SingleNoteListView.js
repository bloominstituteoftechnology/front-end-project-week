import React, { Component } from "react";
import styled from "styled-components";
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";
import flow from "lodash/flow";
import "./SingleNoteListView.css";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Div = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid #999999;
  width: 200px;
  height: 220px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.15);

  @media (max-width: 650px) {
    width: 90%;
    height: 120px;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4a494a;
`;

const P = styled.p`
  font-size: 12px;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

// *****************************************
// *******      DRAG N DROP START      *****
// *****************************************

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const noteTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveNote(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

// *****************************************
// *******      DRAG N DROP END        *****
// *****************************************

class SingleNoteListView extends Component {
  render() {
    const {
      isDragging,
      note,
      props,
      getNoteString,
      connectDragSource,
      connectDropTarget
    } = this.props;
    const opacity = isDragging ? 0 : 1;
    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className="dnd-div" style={{ opacity }}>
            <Div
              onClick={() => {
                props.history.push(`/note/${note._id}`);
              }}
            >
              <H2>{getNoteString(note.title, 10)}</H2>
              <P>{getNoteString(note.textBody, 25)}</P>
            </Div>
          </div>
        )
      )
    );
  }
}

// export default SingleNoteListView;
// export default DragSource("note", noteSource, collect)(SingleNoteListView);

export default flow(
  DragSource("note", noteSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget("note", noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(SingleNoteListView);
