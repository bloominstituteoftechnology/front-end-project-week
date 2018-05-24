import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import NewNote from "./components/NewNote";
import SideBar from "./components/SideBar";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "One",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 1,
          title: "Two",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 2,
          title: "Three",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 3,
          title: "Four",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 4,
          title: "Five",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 5,
          title: "Six",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 6,
          title: "Seven",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        },
        {
          id: 7,
          title: "Eight",
          notes: "Fusce in placerat nisl. Cras convallis mi tincidunt fringilla facilisis. In efficitur est elit, vitae finibus ante tristique eu. Vestibulum nec lobortis ante. Mauris id eros eleifend, maximus sem a, lobortis nulla. Maecenas eget quam sollicitudin, pulvinar lorem fermentum, mattis leo. Nullam posuere, dolor at volutpat semper, quam tortor tincidunt neque, vehicula fringilla ante lectus a arcu. Praesent leo erat, sagittis vel posuere ac, porttitor non turpis. Sed commodo, nibh eu faucibus suscipit, risus sapien mollis nulla, vel convallis magna mi at quam. Sed a tortor eu ligula bibendum accumsan"
        }
     
      ]
    };
  }

  newNote = note => {
    const notes = this.state.notes;
    this.setState({ notes: notes.concat(note) });
  };

  updateNote = note => {
    let id = parseInt(note.id, 10);
    const notes = this.state.notes;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1, note);
    this.setState({ notes: notes });
  };

  deleteNote = id => {
    id = parseInt(id, 10);
    const notes = this.state.notes;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1);
    this.setState({ notes: notes });
  };

  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <SideBar />
        <Switch>
          <Route exact path="/" render={props => <NoteList notes={notes} />} />
          <Route
            path="/newNote"
            render={props => <NewNote newNote={this.newNote} />}
          />
          <Route
            path="/:id"
            render={({ match }) => (
              <Note
                updateNote={this.updateNote}
                deleteNote={this.deleteNote}
                notes={notes}
                match={match}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
