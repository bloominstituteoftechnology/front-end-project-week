import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route } from "react-router-dom";
import ViewNotes from "./containers/viewNotes";
import NewList from "./containers/newList";


class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
   
    if (this.props.gettingNotes) {
      return <h2>Loading: Hang Tight.</h2>;
    }
    if (this.props.error) {
      return <h1>Houston, we have a problem!</h1>;
    }
    return (
      <div className="Page-Container">
        <NavBar />
        <div className="Main-View">
          <div className="Note-Container">
            <Route
              exact
              path="/notes"
              render={props => <NewList {...props} notes={this.props.notes} />}
            />
            <Route
              
              path="/createNote"
              render={props => (
                <createNewNote {...props} notes={this.props.notes} />
              )}
            />
            <Route
              
              path="/notes/:_id"
              render={props => (
                <ViewNotes
                  {...props}
                  notes={this.props.notes}
                  deleteNote={this.props.deleteNote}
                  updateForm={this.props.updateForm}
                  getNotes={this.props.getNotes}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;