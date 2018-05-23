import React, { Component } from 'react';
import _ from "underscore";
import './App.css';
import { connect } from "react-redux";
import { fetchNote, addNote, deleteNote } from "./actions/notesAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }


  componentDidMount() {
    this.props.fetchNote()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.addNote(note);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            required
            placeholder="Enter Title"
          />
          <input
            onChange={this.handleChange}
            value={this.state.body}
            type="text"
            name="body"
            required
            placeholder="Notes..."
          />
          <button>
            Add Note
          </button>
        </form>
        {_.map(this.props.notes, (note, key) => {
          return (
            <div key={key}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <button
                onClick={() => this.props.deleteNote(key)}
              >
                X
              </button>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { fetchNote, addNote, deleteNote })(App);
