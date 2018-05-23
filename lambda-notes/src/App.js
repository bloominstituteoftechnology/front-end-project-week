import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchNote, addNote } from "./actions/notesAction";

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

  renderNotes = () => {
    let newArray = [];
    let obj = this.props.notes;
    for(let key in obj) {
      newArray.push(obj[key]);
    }
    return newArray.map((note, index) => {
      return (
        <div key={index}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
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
        {this.renderNotes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { fetchNote, addNote })(App);
