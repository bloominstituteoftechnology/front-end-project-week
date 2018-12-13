// Is this presentational or is this a functional kind of component? think about this later.

import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, updateNote, updateForm, addNote, updateFormDone } from "../Actions";
import styled from "styled-components";
import './CreateNewView.css';

const HeaderMessage = styled.div`
    height: 100px;
    // border: 1px solid red;
    margin: 0px 10px;
    padding: 40px 0;
    font-size: 4rem;
    font-weight: bold;
    `;

class CreateNewView extends Component {
  /*
    we need a few things:
    name
    age
    height
    and some sort of button!
  */

  constructor() {
    super();
    this.state = {
      tags: "",
      title: "",
      textBody: "",
      
    };
  }


  componentDidMount() {
    console.log('this will make me laugh one day.');
      this.updateNote();
    


  
  };
  componentDidUpdate(previousProps) {
 
    if (this.props.addingNote !== previousProps.addingNote) {
      if (!this.props.addingNote) {
        console.log("fetching data after adding");
        this.props.getNotes();
        this.props.history.push("/");
      }
    }
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    console.log("Yo guys!");
    event.preventDefault();
     if (this.props.currentNote) this.props.updateNote(this.state);
    
     else 
    this.props.addNote(this.state);
    this.setState({
      tags: "",
      title: "",
      textBody: ""
    });

    console.log(this.props.notes);
  };

  updateNote = () => {
    this.setState(this.props.currentNote);
  };
  
  render() {
    if (this.props.addingNote) {
      console.log("jalfdkjadlkfjalf");
      return <div>addding div, oaky?</div>;
    }
    return (
      <>
      <HeaderMessage>Create a New Note:</HeaderMessage>
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Please add title"
          />
          <textarea
            onChange={this.changeHandler}
            type="text"
            name="textBody"
            value={this.state.textBody}
            placeholder="Please add textBody"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="tags"
            value={this.state.tags}
            placeholder="Please add tags"
          />
          <button>
            {this.props.currentNote ? `Update Note!` : `Save Your Note!`}
          </button>
        </form>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentNote: state.currentNote,
  newNoteID: state.newNoteID,
  addingNote: state.addingNote
});

export default connect(
  mapStateToProps,
  { getNotes,  updateNote, updateForm, addNote }
)(CreateNewView);
