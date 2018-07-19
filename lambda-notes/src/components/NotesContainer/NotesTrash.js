import React from 'react';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver()
    }
}

const dropTarget = {
    drop(props, monitor) {
        props.toggleModal();
        props.getId(monitor.getItem().id);
    },
}

const NotesTrash = props => {
    const { connectDropTarget, hovered } = props;
    const color = hovered ? 'red' : null;
    return connectDropTarget(<i style={{ color }} className="far fa-trash-alt"></i>);
}

export default DropTarget('card', dropTarget, collect)(NotesTrash);