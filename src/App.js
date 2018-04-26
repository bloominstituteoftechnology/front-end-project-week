import React, { Component } from "react";
import { Route } from "react-router-dom";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

import NotesList from "./components/NotesList";
import Navigation from "./components/Navigation";
import "./App.css";
import AddNote from "./components/AddNote";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      longinFlag: false,
      notes: [
        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },

        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },

        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },

        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },
        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },
        {
          title: "Note title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },
        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },
        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        },
        {
          title: "Note Title",
          text:
            "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
        }
      ]
    };
  }

  addNote = (title, text) => {
    const newNotes = this.state.notes;
    console.log(newNotes, "our notes from state");
    const newNote = { title: title, text: text };
    newNotes.push(newNote);
    this.setState({
      notes: newNotes
    });
  };

  deleteNote = index => {
    const newNotes = this.state.notes;
    if (index !== -1) {
      newNotes.splice(index, 1);
    }
    this.setState({
      notes: newNotes
    });
  };

  login = () => {
    this.setState({
      longinFlag: true
    });
  };

  logout = () => {
    this.setState({
      longinFlag: false
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.longinFlag ? (
          <React.Fragment>
            <div className="notes-menu">
              <h2> Lambda Notes </h2>
              <Navigation />
              <div className="nav-bar">
                <CSVLink
                  data={this.state.notes}
                  filename={"My-notes.csv"}
                  className="link download"
                >
                  Download Notes
                </CSVLink>
                <Link to="/" className="link signOut" onClick={this.logout}>
                  {" "}
                  Sign Out{" "}
                </Link>
              </div>
            </div>

            <div className="notes-list">
              <Route
                path="/NotesList"
                render={() => <NotesList notes={this.state.notes} />}
              />
              <Route
                path="/AddNote"
                render={() => <AddNote onSubmit={this.addNote} />}
              />
              <Route
                path="/ViewNote/:id"
                render={props => (
                  <ViewNote
                    {...props}
                    notes={this.state.notes}
                    deleteNote={this.deleteNote}
                  />
                )}
              />
              <Route path="/EditNote" render={() => <EditNote />} />
            </div>
          </React.Fragment>
        ) : (
          <Route
            exact
            path="/"
            render={() => <Login changeLoginFlag={this.login} />}
          />
        )}
      </div>
    );
  }
}

export default App;
