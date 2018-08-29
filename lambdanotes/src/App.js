import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import dummyData from "./components/dummydata";
import AddNote from "./components/Addnote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummyData,
      newtitle: "",
      newtext: "",
      id: 4,
    }
  }
  handleNoteSubmit = note => {
    console.log('clicked')
    console.log(this)
        this.setState(prevState => ({ notes: [...prevState.notes, note] }))
        };

  render() {
    console.log(this)
    return (
      <div>
        <Navbar />
        <Switch>
         <Route exact path="/"
            render={() => <div>HOME page here</div>}
        />

        <Route exact path="/add"
            render={props => (
                <AddNote {...props} onSubmit={this.handleNoteSubmit} />
            )}
        />

        <Route exact path="/notes"
            component={Notes}
        />

        <Route exact path="/notes/:id"
            render={props => (
                <Note {...props} notes={this.state.notes} />
            )}
        />
        </Switch>
        </div>
    );
  }
}

export default App;
