import React from 'react';
import { NotesCardLink, NotesCardContainer, NotesCardTitle, NotesContent } from '../ReusableComponents/Notes';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

const cardSource = {
    beginDrag(props) {
        return {
            id: props.note.id,
            index: props.index,
        }
    },

};

const cardTarget = {
    hover(props, monitor) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);
        monitor.getItem().index = hoverIndex;
    },
}

const NotesCard = props => {
    const { isDragging, connectDragSource, connectDropTarget, note } = props;
    const opacity = isDragging ? 0 : 1;

    // Displays each note to the screen
    return connectDragSource && connectDropTarget && connectDragSource(connectDropTarget(
        <div className='notes-card-wrapper' style={{ opacity }}>
            <NotesCardLink to={`/notes/view/${note.id}`}>

                <NotesCardContainer>
                    <NotesCardTitle>{note.title}</NotesCardTitle>
                    <NotesContent
                        className='note-paragraph'
                        text={note.content}
                        maxLine='6'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </NotesCardContainer>

            </NotesCardLink>
        </div>
    ));
}

export default flow(
    DragSource(
        'card',
        cardSource,
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging()
        }),
    ),
    DropTarget('card', cardTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    })))(NotesCard);