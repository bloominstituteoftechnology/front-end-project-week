
import DisplayNoteCard from "./DisplayNoteCard";
import React, { Component } from "react";
import SearchNote from './SearchNote';
import {searchFunc} from '../util';

class DisplayNoteList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isSearched : false,
    };

    this.displayedNotes = [];
  }


  // props.note get updated a bit late due to api call.
  // to reflect the latest props.note, componentDidUpdate is used
  componentDidUpdate(prevProps){
         if (prevProps.isSearched !== this.props.isSearched){
       this.setState({
        isSearched: this.props.isSearched,
      query : ''});
     }
  }

  handleInputChange = e => {

    this.setState({ 
      [e.target.name]: e.target.value,
      isSearched : true });
      this.props.handleSearchBoolean(true);
      
  };



  render() {
    console.log("DisplayNote in Render props.note = ",this.props.notes);
    if(this.state.isSearched)
      this.displayedNotes = searchFunc (this.state.query, this.props.notes);
    else
      this.displayedNotes = [...this.props.notes];
    

    return (
      <div className="NoteListContainer">
        <SearchNote notes={this.state.notes} query = {this.state.query} 
            handleInputChange = {this.handleInputChange} />
        <h3> Your Notes : </h3>
        <div className="noteList">
          {this.displayedNotes.map(note => (
            <DisplayNoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

export default DisplayNoteList;
