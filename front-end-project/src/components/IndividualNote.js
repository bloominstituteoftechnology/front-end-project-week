import React from 'react'
import './component.css'
import { withRouter } from "react-router";
import { XYCoord } from 'dnd-core';
import flow from 'lodash/flow';
import { findDOMNode } from 'react-dom';
import {
    DragSource,
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,
  } from 'react-dnd';

const cardSource = {
    beginDrag(props) {
      return {
        id: props.id,
        index: props.index,
      }
    },
  };

  const cardTarget = {
    hover(props, monitor, component) {
      const dragIndex = monitor.getItem().index
      const hoverIndex = props.index
  
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
  
      // Determine rectangle on screen
      const hoverBoundingRect = (findDOMNode(
        component,
      )).getBoundingClientRect();
  
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
  
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
  
      // Get pixels to the top
      const hoverClientY = (clientOffset).y - hoverBoundingRect.top;
  
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
      props.moveCard(dragIndex, hoverIndex);
  
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex;
    },
  }
  

class  IndividualNote extends React.Component {
    constructor(props) {
        super(props)
    }

       routeToItem = (ev, note) => {
        ev.preventDefault();
        this.props.getNoteId(note)
        this.props.history.push(`/note-list/${note._id}`)
        console.log("noteID",note._id)
    }
    render() {
        const {
            isDragging,
            connectDragSource,
            connectDropTarget,
          } = this.props;
        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
            connectDropTarget(<div className="indiv-note"  onClick={ev => this.routeToItem(ev, this.props.note)}>
            <h4 className="note-title">{this.props.note.title}</h4>
            <p className="note-body">{this.props.note.textBody}</p>
        </div>),
        )
        )}

}


{/* <div className="indiv-note"  onClick={ev => this.routeToItem(ev, this.props.note)}>
                <h4 className="note-title">{this.props.note.title}</h4>
                <p className="note-body">{this.props.note.textBody}</p>
            </div> */}

// export default withRouter(IndividualNote);
export default flow(
    DragSource(
      'card',
      cardSource,
      (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
      }),
    ),
    DropTarget('card', cardTarget, (connect) => ({
      connectDropTarget: connect.dropTarget(),
    }))
  )(withRouter(IndividualNote));