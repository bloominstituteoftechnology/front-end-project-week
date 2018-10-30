import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/SideBar";
import NoteList from "./components/NoteList/NoteList";
import NewNote from "./components/NewNote";
import NoteView from "./components/NoteView";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
      // note: {}
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // fetch data from the api
    axios
      .get("http://localhost:3333/dashboard")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Sidebar />
        <Switch>
          <Route
            path="/list-view"
            render={props => <NoteList {...props} notes={this.state.notes} />}
          />
          <Route
            path="/create-new"
            render={props => (
              <NewNote
                {...props}
                notes={this.state.notes}
                postNote={this.addToNotes}
              />
            )}
          />
          <Route exact path="/:id" component={NoteView} />
          <Route path="/edit-view/:id" component={EditNote} />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
