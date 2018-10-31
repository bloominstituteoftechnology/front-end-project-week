
import DisplayNoteCard from "./DisplayNoteCard";
import React, { Component } from "react";
import SearchNote from './SearchNote';

class DisplayNoteList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // props.note get updated a bit late due to api call.
  // to reflect the latest props.note, componentDidUpdate is used
  componentDidUpdate(prevProps){
    if(prevProps.notes !== this.props.notes){
    this.setState({notes:[...this.props.notes]});
    }
  }

  handleSearch = (notes) => {
    this.setState({notes:[...notes]});
  }

 

  render() {
    console.log("DisplayNote in Render props.note = ",this.props.notes);
  
    return (
      <div className="NoteListContainer">
        <SearchNote notes={this.state.notes} handleSearch = {this.handleSearch} />
        <h3> Your Notes : </h3>
        <div className="noteList">
          {this.state.notes.map(note => (
            <DisplayNoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayNoteList;
