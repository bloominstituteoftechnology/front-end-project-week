import React from 'react';
import { connect } from 'react-redux';
import { handleId } from '../actions/actions';
import styled from 'styled-components';
import { Markup } from 'interweave';
import { findDOMNode } from 'react-dom';
import { DragSource, 
        DropTarget, 
        ConnectDropTarget, 
        ConnectDragSource, 
        DropTargetMonitor, 
        DropTargetConnector, 
        DragSourceConnector, 
        DragSourceMonitor
        } from 'react-dnd';
import flow from 'lodash/flow'

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



const NoteCard = styled.div`
    width: 27%;
    height: 250px;
    border: 1px solid #8e8b8b;
    padding: 10px 25px;
    margin-bottom: 35px;    
    text-align: start;
    background-color: #fbfafa;
    cursor: pointer;
    > div {
        height: 35px;
        > h2 {
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-wrap: break-word;
            text-overflow: ellipsis;
        }
    }
    > p {
        font-size: 22px;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`

class Note extends React.Component {
    render() {
        const {
            connectDragSource,
            connectDropTarget,            
        } = this.props
        return (
            connectDragSource &&
            connectDropTarget &&
            connectDragSource(
                connectDropTarget(  <NoteCard onClick={() => {this.props.history.push(`/note/${this.props.id}`);this.props.handleId(this.props.id)}} >
                                        <div>
                                            <h2>{this.props.title}</h2>
                                        </div>
                                        <hr></hr>                            
                                        <Markup content={this.props.textBody.substring(0, 160)+'...'} />
                                    </NoteCard>
                    )
                )
            )
    }
}

export default connect(()=>{return{}}, {handleId})(flow(DragSource(
                                                                'card',
                                                                cardSource,
                                                                (conect, monitor) => ({
                                                                    ConnectDropTarget: conect.dragSource(),
                                                                    isDragging: monitor.isDragging(),
                                                                }),
                                                            ),
                                                            DropTarget('card', cardTarget, conect => ({
                                                                ConnectDropTarget: conect.dropTarget(),
                                                            }))
                                                        )(Note));
