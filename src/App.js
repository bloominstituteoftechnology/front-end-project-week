import React, { Component } from "react";
import { Route } from "react-router-dom";

import NotesList from "./components/NotesList";
import Navigation from "./components/Navigation";
import "./App.css";
import AddNote from "./components/AddNote";
import ViewNote from "./components/ViewNote";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(newNotes, "notes from state");
    const newNote = { title: title, text: text };
    newNotes.push(newNote);
    this.setState({
      notes: newNotes
    });
  };
  render() {
    return (
      <div className="container">
        <div className="notes-menu">
          <h1> Lambda Notes </h1>
          <Navigation />
        </div>

        <div className="notes-list">
          {/* <h3>Your notes:</h3> */}
          <Route
            exact
            path="/"
            render={() => <NotesList notes={this.state.notes} />}
          />
          <Route
            path="/AddNote"
            render={() => <AddNote onSubmit={this.addNote} />}
          />
          <Route
            path="/ViewNote/:id"
            render={props => <ViewNote {...props} notes={this.state.notes} />}
          />
          <Route path="/EditNote" render={() => <EditNote />} />
        </div>
      </div>
    );
  }
}

export default App;
