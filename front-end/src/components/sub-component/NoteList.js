import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NoteCard from "./NoteCard";

import "./NoteList.css";

// a little function to help us with reordering the result


// const getItems = () => {
//   this.props.mainProps.noteArray.map((eachNote, index) => ({
//     id: index,
//     content: (
//       <div className="NoteCardContainer col-4 m-0 p-0" key={index}>
//         <div className="NoteCard">
//           <Link to={`/note/${index}`}>
//             <NoteCard eachNote={eachNote} props={this.props} />
//           </Link>
//         </div>
//       </div>
//     )
//   }));
// };

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// using some little inline style helpers to make the app look okay
const grid = 8;
const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  marginBottom: grid,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems()
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  render() {
    console.log("NoteList: this.props", this.props.mainProps);
    return (
      <div className="NoteListContainer">
        <h1 className="NoteListYN">Your Notes: </h1>
        <div className="NoteListCol row p-0 m-0">

          {/* {this.props.mainProps.noteArray.map((eachNote, index) => (
            <div className="NoteCardContainer col-4 m-0 p-0" key={index}>
              <div className="NoteCard">
                <Link to={`/note/${index}`}>
                  <NoteCard eachNote={eachNote} props={this.props} />
                </Link>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default NoteList;
