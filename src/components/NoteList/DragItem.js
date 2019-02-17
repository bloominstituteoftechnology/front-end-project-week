import React, {Component} from 'react';
import { NoteItem, NoteTitle, H4, Tag, Tags } from '../StyledComponents';
import Draggable from 'react-draggable';

class Item extends Component {

	render() {
		const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
		return (
			<Draggable {...dragHandlers}>
				<NoteItem onClick={this.props.onClick}>
					<NoteTitle>
						<H4>{this.props.title}</H4>
					</NoteTitle>
					<P>{this.props.content}</P>
					<Tags>
						{this.props.tags.map(tag => <Tag color={getRandomColor}>{tag}</Tag>)}
					</Tags>
				</NoteItem>
			</Draggable>
		)
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

export default Item

// import Draggable from 'react-draggable';
// import { findDOMNode } from 'react-dom';
// import {
// 	DragSource,
// 	DropTarget,
// 	ConnectDropTarget,
// 	ConnectDragSource,
// 	DropTargetMonitor,
// 	DropTargetConnector,
// 	DragSourceConnector,
// 	DragSourceMonitor,
// } from 'react-dnd';
// import { XYCoord } from 'dnd-core';
// import Note from './note';
// import flow from 'lodash/flow';
// const update = require('immutability-helper');





// const style = {
// 	border: '1px dashed gray',
// 	padding: '0.5rem 1rem',
// 	marginBottom: '.5rem',
// 	backgroundColor: 'white',
// 	cursor: 'move',
// }

// const cardSource = {
// 	beginDrag(props) {
// 		return {
// 			id: props.id,
// 			index: props.index,
// 		}
// 	},
// }

// const cardTarget = {
// 	hover(props, monitor, component{
		
// 		const dragIndex = monitor.getItem().index
// 		const hoverIndex = props.index

// 		// Don't replace items with themselves
// 		if (dragIndex === hoverIndex) {
// 			return
// 		}

// 		// Determine rectangle on screen
// 		const hoverBoundingRect = (findDOMNode(
// 			component,
// 		) ).getBoundingClientRect()

// 		// Get vertical middle
// 		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

// 		// Determine mouse position
// 		const clientOffset = monitor.getClientOffset()

// 		// Get pixels to the top
// 		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		
// 		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
// 			return
// 		}

// 		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
// 			return
// 		}

		
// 		props.moveCard(dragIndex, hoverIndex)

// 		monitor.getItem().index = hoverIndex
// 	},
// }

// deleteItem=(id)=> {
//     let items = prevState.items;
//     const index=items.findindex(item=>item.id===id);
//     items.spice(index, 1);
//     return{items}
// });
// }


// moveNote=(dragIndex, hoverIndex)=> {
//     const { cards } = this.state
//     const dragCard = cards[dragIndex]

//     this.setState(
//         update(this.state, {
//             cards: {
//                 $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
//             },
//         }),
//     )
// }
// }


// export default class Note extends React.Component {
// 	 render() {
// 		const {
// 			text,
// 			isDragging,
// 			connectDragSource,
// 			connectDropTarget,
// 		} = this.props
// 		const opacity = isDragging ? 0 : 1

// 		return (
// 			connectDragSource &&
// 			connectDropTarget &&
// 			connectDragSource(
//                 connectDropTarget(<div style={{ ...style, opacity }}>{text}</div>),
//             ))}}


//             export default flow(
//     DragSource(DragSource(
//         'note',
//         cardSource,
//         (connect, monitor => ({
//             connectDragSource: connect.dragSource(),
//             isDragging: monitor.isDragging(),
//         }),),
//         DropTarget(Note, cardTarget, (connect) => ({
//             connectDropTarget: connect.dropTarget(),
//         })))
//             )(Note);
			
// let Draggable = window.ReactDraggable;

// let App = React.createClass({
// 	getInitialState() {
// 		return {
// 			activeDrags: 0,
// 			deltaPosition: {
// 				x: 0, y: 0
// 			},
// 			controlledPosition: {
// 				x: -400, y: 200
// 			}
// 		};
// 	},

// 	handleDrag(e, ui) {
// 		const { x, y } = this.state.deltaPosition;
// 		this.setState({
// 			deltaPosition: {
// 				x: x + ui.deltaX,
// 				y: y + ui.deltaY,
// 			}
// 		});
// 	},

// 	onStart() {
// 		this.setState({ activeDrags: ++this.state.activeDrags });
// 	},

// 	onStop() {
// 		this.setState({ activeDrags: --this.state.activeDrags });
// 	},

// 	// For controlled component
// 	adjustXPos(e) {
// 		e.preventDefault();
// 		e.stopPropagation();
// 		const { x, y } = this.state.controlledPosition;
// 		this.setState({ controlledPosition: { x: x - 10, y } });
// 	},

// 	adjustYPos(e) {
// 		e.preventDefault();
// 		e.stopPropagation();
// 		const { controlledPosition } = this.state;
// 		const { x, y } = controlledPosition;
// 		this.setState({ controlledPosition: { x, y: y - 10 } });
// 	},

// 	onControlledDrag(e, position) {
// 		const { x, y } = position;
// 		this.setState({ controlledPosition: { x, y } });
// 	},

// 	onControlledDragStop(e, position) {
// 		this.onControlledDrag(e, position);
// 		this.onStop();
// 	},

// 	render() {
// 		const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
// 		const { deltaPosition, controlledPosition } = this.state;
// 		return (
// 			<div>
// 				<h1>React Draggable</h1>
// 				<p>Active DragHandlers: {this.state.activeDrags}</p>
// 				<p>
// 					<a href="https://github.com/mzabriskie/react-draggable/blob/master/example/index.html">Demo Source</a>
// 				</p>
// 				<Draggable {...dragHandlers}>
// 					<div className="box">I can be dragged anywhere</div>
// 				</Draggable>
// 				<Draggable axis="x" {...dragHandlers}>
// 					<div className="box cursor-x">I can only be dragged horizonally (x axis)</div>
// 				</Draggable>
// 				<Draggable axis="y" {...dragHandlers}>
// 					<div className="box cursor-y">I can only be dragged vertically (y axis)</div>
// 				</Draggable>
// 				<Draggable onStart={() => false}>
// 					<div className="box">I don't want to be dragged</div>
// 				</Draggable>
// 				<Draggable onDrag={this.handleDrag} {...dragHandlers}>
// 					<div className="box">
// 						<div>I track my deltas</div>
// 						<div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
// 					</div>
// 				</Draggable>
// 				<Draggable handle="strong" {...dragHandlers}>
// 					<div className="box no-cursor">
// 						<strong className="cursor"><div>Drag here</div></strong>
// 						<div>You must click my handle to drag me</div>
// 					</div>
// 				</Draggable>
// 				<Draggable cancel="strong" {...dragHandlers}>
// 					<div className="box">
// 						<strong className="no-cursor">Can't drag here</strong>
// 						<div>Dragging here works</div>
// 					</div>
// 				</Draggable>
// 				<Draggable grid={[25, 25]} {...dragHandlers}>
// 					<div className="box">I snap to a 25 x 25 grid</div>
// 				</Draggable>
// 				<Draggable grid={[50, 50]} {...dragHandlers}>
// 					<div className="box">I snap to a 50 x 50 grid</div>
// 				</Draggable>
// 				<Draggable bounds={{ top: -100, left: -100, right: 100, bottom: 100 }} {...dragHandlers}>
// 					<div className="box">I can only be moved 100px in any direction.</div>
// 				</Draggable>
// 				<div className="box" style={{ height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0' }}>
// 					<div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
// 						<Draggable bounds="parent" {...dragHandlers}>
// 							<div className="box">
// 								I can only be moved within my offsetParent.<br /><br />
// 								Both parent padding and child margin work properly.
//               </div>
// 						</Draggable>
// 						<Draggable bounds="parent" {...dragHandlers}>
// 							<div className="box">
// 								I also can only be moved within my offsetParent.<br /><br />
// 								Both parent padding and child margin work properly.
//               </div>
// 						</Draggable>
// 					</div>
// 				</div>
// 				<Draggable bounds="body" {...dragHandlers}>
// 					<div className="box">
// 						I can only be moved within the confines of the body element.
//           </div>
// 				</Draggable>
// 				<Draggable>
// 					<div className="box" style={{ position: 'absolute', bottom: '100px', right: '100px' }} {...dragHandlers}>
// 						I already have an absolute position.
//           </div>
// 				</Draggable>
// 				<Draggable defaultPosition={{ x: 25, y: 25 }} {...dragHandlers}>
// 					<div className="box">
// 						{"I have a default position of {x: 25, y: 25}, so I'm slightly offset."}
// 					</div>
// 				</Draggable>
// 				<Draggable position={controlledPosition} {...dragHandlers} onDrag={this.onControlledDrag}>
// 					<div className="box">
// 						My position can be changed programmatically. <br />
// 						I have a drag handler to sync state.
//             <p>
// 							<a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
// 						</p>
// 						<p>
// 							<a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
// 						</p>
// 					</div>
// 				</Draggable>
// 				<Draggable position={controlledPosition} {...dragHandlers} onStop={this.onControlledDragStop}>
// 					<div className="box">
// 						My position can be changed programmatically. <br />
// 						I have a dragStop handler to sync state.
//             <p>
// 							<a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
// 						</p>
// 						<p>
// 							<a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
// 						</p>
// 					</div>
// 				</Draggable>

// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(<App />, document.getElementById('container'));

