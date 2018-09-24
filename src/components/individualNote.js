import React, { Component } from "react";
import axios from "axios";
import SideBar from "./sidebar";

class IndividualNote extends Component{
  state= {
    title: '',
    textBody: '',
  }

  componentDidMount () {
    const noteID = this.props.match.params.id
    console.log(noteID)
    this.getNote(noteID);
  }

  getNote = noteID => {
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
    .then(response => {
      
      this.setState({title: response.data.title, textBody: response.data.textBody})
      
    })
    .catch(err => {
      console.log(err);
    })
  };
  render(){
  return (
    <div>
      <h1>{this.state.title}</h1>
      <h2>{this.state.textBody}</h2>
    </div>
  )};
}

export default IndividualNote;
