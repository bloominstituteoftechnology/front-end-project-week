import React from 'react';
import { connect } from 'react-redux';
import { handleId, moveCard } from '../actions/actions';
import { Markup } from 'interweave';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget} from 'react-dnd';
import flow from 'lodash/flow';


const cardSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    }
}

const cardTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        if(dragIndex===hoverIndex) {
            return
        }
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) /2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;
        if(dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        if(dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        props.moveCard(dragIndex, hoverIndex);
        monitor.getItem().index = hoverIndex
    },
}

class Note extends React.Component {
    render() {
        const {
            ConnectDragSource,
            ConnectDropTarget,            
        } = this.props;
        if(!ConnectDragSource||!ConnectDropTarget) return <h1>Undefined</h1>;
        return (ConnectDragSource &&
                    ConnectDropTarget &&
                    ConnectDragSource(
                        ConnectDropTarget(  <div className='note-card' onClick={() => {this.props.history.push(`/note/${this.props.id}`);this.props.handleId(this.props.id)}} >
                                                <div>
                                                    <h2>{this.props.title}</h2>
                                                </div>
                                                <hr></hr>                            
                                                <Markup content={this.props.textBody.length > 70 ? this.props.textBody.substring(0, 70)+'...' : this.props.textBody} />
                                            </div>
                            )
                        )     
                    )       
    }
}

export default connect(()=>{return{}}, {handleId, moveCard})(flow(DragSource(
                                                                'card',
                                                                cardSource,
                                                                (conect, monitor) => ({
                                                                    ConnectDragSource: conect.dragSource(),
                                                                    isDragging: monitor.isDragging(),
                                                                }),
                                                            ),
                                                            DropTarget('card', cardTarget, conect => ({
                                                                ConnectDropTarget: conect.dropTarget(),
                                                            }))
                                                        )(Note));
