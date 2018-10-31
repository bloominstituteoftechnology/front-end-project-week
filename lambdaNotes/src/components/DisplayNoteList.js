
import DisplayNoteCard from "./DisplayNoteCard";
import React, { Component } from "react";
import SearchNote from './SearchNote';
import {searchFunc} from '../util';

class DisplayNoteList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes || [],
      query: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  // props.note get updated a bit late due to api call.
  // to reflect the latest props.note, componentDidUpdate is used
  componentDidUpdate(prevProps){
    if(prevProps.notes !== this.props.notes){
    this.setState({notes:[...this.props.notes]});
    }

    // if prevProp.isSearch !== this.props.iSearch
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSearch = (notes) => {
    this.setState({notes:[...notes]});
  }

 

  render() {
    console.log("DisplayNote in Render props.note = ",this.props.notes);
    let searchedNotes = searchFunc (this.state.query, this.state.notes)

    return (
      <div className="NoteListContainer">
        <SearchNote notes={this.state.notes} query = {this.state.query} 
            handleSearch = {this.handleSearch} 
            handleInputChange = {this.handleInputChange} />
        <h3> Your Notes : </h3>
        <div className="noteList">
          {searchedNotes.map(note => (
            <DisplayNoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayNoteList;
