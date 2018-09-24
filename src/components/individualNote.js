import React, { Component } from "react";
import axios from "axios";

class IndividualNote extends Component {
  state = {
    note: {}
  };
  componentDidMount() {
    let id = this.props.match.params._id;
    console.log(id);
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.log(this.error);
      });
  };
  render() {
      if(!this.state.note){
          return(<p>Note is still loading</p>)
      }
    return(
        <div>
        <h1>{this.state.note.title}</h1>
        <h2>{this.state.note.text}</h2>


        </div>
    )
  }
}

export default IndividualNote;
