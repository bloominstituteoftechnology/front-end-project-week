import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import DeleteNote from "./components/DeleteNote";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      content: "",
      deleting: false,
      currentNote: {}
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/api/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  //METHODS

handleSetData = (data) => {
  this.setState({notes:data, deleting:false})
}

  handleSetCurrent = note => {
    this.setState({ currentNote: note });
  };



  //Delete
  toggleDeleting = () => {
    this.setState({ deleting: !this.state.deleting });
  };

  handleRefresh = () => {
    axios
      .get(`${process.env.REACT_APP_API}/api/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  };

  //Sort
  handleSortAZ = () => {
    let notes = this.state.notes.slice();
    notes.sort(this.compareTitles);
    this.setState({ notes });
  };

  handleSortZA = () => {
    let notes = this.state.notes.slice();
    notes.sort(this.compareTitles).reverse();
    this.setState({ notes });
  }

  compareTitles = (a, b) => {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />

        <Route
          exact
          path="/"
          render={() => (
            <NotesList
              notes={this.state.notes}
              handleSortAZ={this.handleSortAZ}
              handleSortZA={this.handleSortZA}
            />
          )}
        />

        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              toggleDeleting={this.toggleDeleting}
            />
          )}
        />

        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              title={this.state.title}
              content={this.state.content}
              handleSetData={this.handleSetData}
            />
          )}
        />

        <Route
          path="/edit/:id"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              handleSetData={this.handleSetData}
              handleRefresh={this.handleRefresh}

            />
          )}
        />

        {this.state.deleting ? (
          <Route
            path="/notes/:id"
            render={props => (
              <DeleteNote
                {...props}
                toggleDeleting={this.toggleDeleting}
                handleSetCurrent={this.handleSetCurrent}
                handleRefresh={this.handleRefresh}
                handleSetData={this.handleSetData}

              />
            )}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
