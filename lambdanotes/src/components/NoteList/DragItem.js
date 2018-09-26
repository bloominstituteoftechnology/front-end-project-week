import React from 'react';
import Draggable from 'react-draggable';
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
import { XYCoord } from 'dnd-core';
import Note from './note';
import flow from 'lodash/flow';
const update = require('immutability-helper');





const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		}
	},
}

const cardTarget = {
	hover(props, monitor, component{
		
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(
			component,
		) ).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		
		props.moveCard(dragIndex, hoverIndex)

		monitor.getItem().index = hoverIndex
	},
}

deleteItem=(id)=> {
    let items = prevState.items;
    const index=items.findindex(item=>item.id===id);
    items.spice(index, 1);
    return{items}
});
}


moveNote=(dragIndex, hoverIndex)=> {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
        update(this.state, {
            cards: {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
            },
        }),
    )
}
}


export default class Note extends React.Component {
	 render() {
		const {
			text,
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props
		const opacity = isDragging ? 0 : 1

		return (
			connectDragSource &&
			connectDropTarget &&
			connectDragSource(
                connectDropTarget(<div style={{ ...style, opacity }}>{text}</div>),
            ))}}


            export default flow(
    DragSource(DragSource(
        'note',
        cardSource,
        (connect, monitor => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),),
        DropTarget(Note, cardTarget, (connect) => ({
            connectDropTarget: connect.dropTarget(),
        })))
            )(Note);
            