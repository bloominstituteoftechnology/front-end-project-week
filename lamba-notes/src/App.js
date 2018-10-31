import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Note from "./components/Note";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      test: "wtf"
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => this.setState({ notes: response.data }))
      .then(console.log(this.state.notes))
      .catch(error => console.log(error));
  }

  // deleteNote = id => {
  //   axios
  //     // .delete(`http://localhost:3000/smurfs/${id}`)
  //     .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
  //     .then(response => {
  //       this.setState({ notes: response._id });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <h1 className="sideBar__headline">
            Lambda
            <br />
            Notes
          </h1>
          <button className="btn">View Your Notes</button>
          <br />
          <button className="btn">Create New Note</button>
        </div>

        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Notes notes={this.state.notes} />}
          />
          <Route path="/submit" component={NoteForm} />

          <Route
            path="/note/get/:id"
            render={props => <Note {...props} wtf={this.state.test} />}
          />

          {/* <Route
            path="/note/get/:id"
            render={() => (
              <Note
                
              />
            )}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
