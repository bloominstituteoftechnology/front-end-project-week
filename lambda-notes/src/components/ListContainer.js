import React from "react";
import List from "./List";
import Create from "./Create";
import { Route, withRouter } from "react-router-dom";
import Note from "./Note";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";

class ListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      displayDelete: false,
      notes: [],
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get("http://localhost:5000/api/notes")
      .then(res => {
        console.log("Notes Data:", res.data);
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/notes");
      });
  };

  handleTaskChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddNoteSubmit = e => {
    e.preventDefault();
    const title = this.state.title;
    const content = this.state.content;
    const notes = {
      title,
      content
    };

    axios
      .post("http://localhost:5000/api/create", notes)
      .then(res => {
        this.getNotes();
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchNote = id => {
    const filterNote = this.state.notes.filter(note => note.id === id);
    return filterNote[0];
  };

  updateNoteHandler = (e, id) => {
    e.preventDefault();

    const noteId = Number(id);
    const title = this.state.title;
    const content = this.state.content;
    const notes = {
      title,
      content
    };

    axios
      .put(`http://localhost:5000/api/edit/${noteId}`, notes)
      .then(res => {
        this.getNotes();
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteNoteHandler = id => {
    console.log(id);
    const noteId = Number(id);

    axios
      .delete(`http://localhost:5000/api/delete/${noteId}`)
      .then(res => {
        this.getNotes();
        this.props.history.push("/notes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  showModal = () => {
    console.log("word");
    this.setState({ displayDelete: !this.state.displayDelete });
    console.log(this.state.displayDelete);
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/notes"
          render={props => <List {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create"
          render={props => (
            <Create
              {...props}
              handleAddNoteSubmit={this.handleAddNoteSubmit}
              handleTaskChange={this.handleTaskChange}
              title={this.state.title}
              content={this.state.content}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <Edit
              {...props}
              updateNoteHandler={this.updateNoteHandler}
              handleTaskChange={this.handleTaskChange}
              title={this.state.title}
              content={this.state.content}
            />
          )}
        />
        {this.state.displayDelete ? (
          <Route
            path="/delete/:id"
            render={props => (
              <Delete
                {...props}
                deleteNoteHandler={this.deleteNoteHandler}
                handleTaskChange={this.handleTaskChange}
                showModal={this.showModal}
                title={this.state.title}
                content={this.state.content}
              />
            )}
          />
        ) : null}
        <Route
          path="/note/:id"
          render={props => (
            <Note
              {...props}
              displayDelete={this.state.displayDelete}
              fetchNote={this.fetchNote}
              showModal={this.showModal}
              deleteNoteHandler={this.deleteNoteHandler}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(ListContainer);
