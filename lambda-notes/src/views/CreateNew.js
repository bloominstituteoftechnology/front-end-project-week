
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getNotes,
  updateNote,
  updateForm,
  addNote,
  updateFormComplete
} from "../actions";
import styled from "styled-components";
import "./CreateNew.css";

const Banner = styled.div`
  height: 100px;
  margin: 0px 10px;
  padding: 40px 0;
  font-size: 4rem;
  font-weight: bold;
`;

class CreateNew extends Component {

  constructor() {
    super();
    this.state = {
      tags: "",
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    this.updateNote();
  }
  componentDidUpdate(previousProps) {
    if (this.props.addingNote !== previousProps.addingNote) {
      if (!this.props.addingNote) {
        this.props.getNotes();
        this.props.history.push("/notes");
      }
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.props.currentNote) this.props.updateNote(this.state);
    else this.props.addNote(this.state);
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
      console.log("something goes here");
      return <h1>"The rotation of the Earth really makes my day."</h1>;
    }
    return (
      <>
        <div className="Notes-Container">
          <Banner>Create a New Note:</Banner>

          <form onSubmit={this.submitHandler}>
            <input className="add-title"
              onChange={this.changeHandler}
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Add title"
            />
            <textarea className="add-text"
              onChange={this.changeHandler}
              type="text"
              name="textBody"
              value={this.state.textBody}
              placeholder="Add text"
            />
            <input className="search-tags"
              onChange={this.changeHandler}
              type="text"
              name="tags"
              value={this.state.tags}
              placeholder="Add tags"
            />
            <button>
              {this.props.currentNote ? `Update` : `Save`}
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
  { getNotes, updateNote, updateForm, updateFormComplete, addNote }
)(CreateNew);
