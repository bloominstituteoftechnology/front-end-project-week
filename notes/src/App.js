import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";

// TODO: Add about page
import About from "./components/About";
import Notes from "./components/Notes";
import Note from "./components/Note";
import NewForm from "./components/NewForm";
import EditForm from "./components/EditForm";
import TopBar from "./components/TopBar";
import styled from "styled-components";

import { PushSpinner, GridSpinner } from "react-spinners-kit";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgb(234, 237, 232);
`;

const Loading = styled.div`
  display: flex;
  margin: 50vh 50vw;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      title: "",
      textBody: "",
      updateTitle: "",
      updateTextBody: "",
      deleteToggle: false,
      loading: true,
      search: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://onedrousdev.herokuapp.com/api/notes")
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });

    this.setState({ loading: false });
  }

  // TODO: Figure how to update without constant GET requests
  // componentDidUpdate() {
  //   axios
  //     .get("https://fe-notes.herokuapp.com/note/get/all")
  //     .then(response => {
  //       this.setState(() => ({ notes: response.data }));
  //     })
  //     .catch(error => {
  //       console.error("Server Error", error);
  //     });
  // }

  addNote = () => {
    axios
      .post("https://onedrousdev.herokuapp.com/api/create", {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  deleteNote = id => {
    axios
      .delete(`https://onedrousdev.herokuapp.com/api/delete/${id}`)
      .then(response => {})
      .catch(err => {
        console.log(err);
      });

    this.setState();
    this.props.history.push("/");
  };

  deleteToggleOn = () => {
    this.setState({ deleteToggle: true });
  };

  deleteToggleOff = () => {
    this.setState({ deleteToggle: false });
  };

  editNote = id => {
    axios
      .put(`https://onedrousdev.herokuapp.com/api/edit/${id}`, {
        title: this.state.updateTitle,
        textBody: this.state.updateTextBody
      })
      .catch(err => {
        console.log(err);
      });
  };

  updatedNote = (title, textBody) => {
    this.setState({ updateTitle: title, updateTextBody: textBody });
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    let filterNote = this.state.notes.filter(
      note =>
        note.title.toLowerCase().includes(this.state.search) ||
        note.textBody.toLowerCase().includes(this.state.search)
    );

    if (this.state.loading) {
      return (
        <Loading>
          <GridSpinner size={30} color="#007bff" loading={this.state.loading} />
        </Loading>
      );
    } else {
      return (
        <div className="App">
          <TopBar />
          <Container>
            <Route
              exact
              path="/"
              render={props => (
                <Notes
                  {...props}
                  notes={this.state.notes}
                  deleteNote={this.deleteNote}
                  deleteToggleOn={this.deleteToggleOn}
                  deleteToggleOff={this.deleteToggleOff}
                  delete={this.state.deleteToggle}
                />
              )}
            />
            <Route
              path="/notes/:id"
              render={props => (
                <Note
                  {...props}
                  notes={this.state.notes}
                  updatedNote={this.updatedNote}
                  deleteNote={this.deleteNote}
                  deleteToggleOn={this.deleteToggleOn}
                  deleteToggleOff={this.deleteToggleOff}
                  delete={this.state.deleteToggle}
                />
              )}
            />
            <Route
              exact
              path="/note/:id/edit"
              render={props => (
                <EditForm
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  inputHandler={this.inputHandler}
                  updateTitle={this.state.updateTitle}
                  updateTextBody={this.state.updateTextBody}
                />
              )}
            />
            <Route
              path="/new-note"
              render={props => (
                <NewForm
                  {...props}
                  addNote={this.addNote}
                  inputHandler={this.inputHandler}
                  title={this.state.title}
                  textBody={this.state.textBody}
                />
              )}
            />
            <Route path="/about" component={About} />
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(App);
