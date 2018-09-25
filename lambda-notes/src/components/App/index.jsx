import React, { Component } from "react";
import { connect } from "react-redux";
import "../components.css";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import { getNotes, addNote } from "../../actions";
import Form from "../Form";
import Note from "../Note";
import NoteList from "../NoteList";
import Sidebar from "../SideBar";

class App extends Component {
  // refactored for redux
  state = {
    title: "",
    textBody: ""
  };

  // component did mount and refecth the notes from the api
  componentDidMount() {
    //this.refetchNotes();
    // refactored for redux
    this.props.getNotes();
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

  // handle form submit -- refactored for redux
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  // refactored for redux
  render() {
    return (
      <div className="wrapper">
        <Sidebar />

        <Route
          exact
          path="/"
          render={props => <NoteList notes={this.props.notes} />}
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

          <Route path="/notes/:id" render={props => <Note {...props} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, addNote }
  )(App)
);
