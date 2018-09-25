import React, { Component } from "react";
import { connect } from 'react-redux';
import "../components.css";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import { getNotes, addNote } from '../../actions';
import Form from "../Form";
import Note from "../Note";
import NoteList from "../NoteList";
import Sidebar from "../SideBar";

class App extends Component {
  state = {
    notes: [],
    title: "",
    textBody: ""
  };

  // component did mount and refecth the notes from the api
  componentDidMount() {
    this.refetchNotes();
  }


  // refetch notes
  refetchNotes = () => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };

  // handle input change
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handle form submit
  handleFormSubmit = e => {
    e.preventDefault();

    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };

    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(response => {
        this.refetchNotes();
        this.setState({
          title: "",
          textBody: ""
        });
      })
      .catch(error => console.log(error));

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <Sidebar />

        <Route
          exact
          path="/"
          render={props => <NoteList notes={this.state.notes} />}
        />

        <Switch>
          <Route
            path="/notes/add"
            render={props => (
              <Form
                type={"new"}
                title={this.state.title}
                textBody={this.state.textBody}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            )}
          />

          <Route
            path="/notes/:id"
            render={props => <Note {...props} refetchNotes={this.refetchNotes} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote })(App));
