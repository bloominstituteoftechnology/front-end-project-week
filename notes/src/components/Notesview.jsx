import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
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
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.changeStateOrder(
      arrayMove(this.state.items, oldIndex, newIndex)
    );
  };
  componentDidMount() {
    this.setState({
      items: this.props.notes
    });
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.setState({
        items: this.props.notes
      });
    }
  }
  changeSort = e => {
    let noteMod = [...this.state.items];
    switch (e.target.value) {
      case "normal":
      this.setState({
        items: this.props.notes
      });
        break;
      case "AZ":
        noteMod.sort(function(a, b) {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        this.setState({
          items: noteMod
        });
        break;
      case "ZA":
      noteMod.sort(function(b, a) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      });
      this.setState({
        items: noteMod
      });
        break;
      case "timenew":
      noteMod.sort(function(b, a) {
        return a.id.toString().localeCompare(b.id.toString());
      });
      this.setState({
        items: noteMod
      });
      break;
      case "timeold":
      noteMod.sort(function(a, b) {
        return a.id.toString().localeCompare(b.id.toString());
      });
      this.setState({
        items: noteMod
      });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="notesViewContainer">
        <div className="titleRow">
          <div className="viewTitle">Your Notes:</div>
          <select onChange={this.changeSort}>
            <option value="normal">Default</option>
            <option value="AZ">Alphabetical</option>
            <option value="ZA">Reverse Alphabetical</option>
            <option value="timenew">Newest First</option>
            <option value="timeold">Oldest First</option>
          </select>
        </div>
        <SortableList
          distance={1}
          axis="xy"
          items={this.state.items}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}

export default Notesview;
