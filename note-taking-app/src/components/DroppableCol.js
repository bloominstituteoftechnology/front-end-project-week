import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import NoteCard from './NoteCard';

const DroppableCol = ({id, list}) => {
    return (
        <Droppable droppableId={`droppable${id}`}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {list.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    <NoteCard {...item} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
//   padding: grid * 2,
//   margin: `0 0 ${grid}px 0`,
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  marginBottom: 10,

  // change background colour if dragging
  outline: isDragging ? '2px solid lightgrey' : 'none',

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#eaeaea' : 'white',
  padding: grid,
  width: 250
});

export default DroppableCol;