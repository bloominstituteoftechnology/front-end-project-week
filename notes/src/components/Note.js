import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';

const cardSource = {
    beginDrag(props) {
        return {
            text: props.text
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { isDragging, connectDragSource, text } = this.props;
        return (
            <div>
            {connectDragSource(
                <div className="noteListBox">
                    <div style={{opacity: isDragging ? 0.5 : 1 }}>
                    {text}
                    
                    <h4>{this.props.note.title}</h4>
                    <hr/>
                    <p>{this.props.note.textBody}</p>
                    </div>
                </div>
            )}
            </div>
            
        )
    }
}

export default DragSource('card', cardSource, collect)(Note);