import SortableItem from "./SortableItem";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  border: "1px solid black",
  alignItems: "left",
  padding: "1% 2.5%",
  width: "25%",
  cursor: "pointer",
  marginBottom: "4%",
  height: "250px",
  background: isDragging ? "lightgreen" : "#ffffff",
  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "none",
  padding: grid,
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
  boxSizing: "border-box"
});

const SortableList = ({ notes, history }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {notes.map((note, index) => (
            <Draggable key={note._id} draggableId={note._id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                  onClick={() => history.push(`/notes/${note._id}`)}
                >
                  <SortableItem note={note} history={history} />
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default SortableList;
