import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import { SortableContainer, SortableElement,arrayMove } from "react-sortable-hoc";
const SortableItem = SortableElement(({ value }) => (
  <Link to={`/${value.id}`}>
    <NoteCard title={value.title} body={value.body} id={value.id} />
  </Link>
));
const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="cardBox">

      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class Notesview extends Component {


  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
    
  };
  componentDidMount (){
    this.setState({
      items: this.props.notes
    })
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.setState({
        items: this.props.notes
      })
    }
  }
  render() {
    return (
      <div className="notesViewContainer">
        <div className="viewTitle">Your Notes:</div>
         <SortableList  distance={1}axis='xy' items={this.state.items} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default Notesview;
