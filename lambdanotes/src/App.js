import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import NotesList from "./components/noteslist";
import { Route } from "react-router-dom";
import Note from "./components/note";
import NoteForm from "./components/noteform";
import NoteFormEdit from "./components/noteformedit";
import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: "",
      title: "",
      id: null,
      edittoggle: false,
      Redirect: false
    };
  }

  componentDidMount() {
    axios.get("http://localhost:2200/")
    .then(response => {
      const newNotes = response.data;
      console.log(newNotes);
      const newState = Object.assign({}, this.state, { notes: newNotes });
      this.setState(newState);
    })
    .catch(err => console.log(err));    
  }

  handleNoteChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addHandler = event => {
    event.preventDefault();
    const arr = this.state.notes.slice();
    if (this.state.title && this.state.note) {
      arr.push({        
        id: this.state.id,
        title: this.state.title,
        note: this.state.note,
        edittoggle: this.state.edittoggle
      });
      axios.post("http://localhost:2200/form", {
        id: this.state.id,
        title: this.state.title,
        note: this.state.note,
        edittoggle: this.state.edittoggle
      }).then(res => {console.log(res);
      console.log(res.data)});
      this.setState(
        {
          notes: arr,
          title: "",
          note: "",
          Redirect: true
        },
        () => {
          this.setState({ Redirect: false });
        }
      );
    }
  };

  deleteHandler = id => {
    axios.delete(`http://localhost:2200/note/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  

  render() {
    return (
      <Container className="App">
        <Route path="/" component={NavBar} />
        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
        <Route
          exact
          path="/note/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              handleNoteChange={this.handleNoteChange}
              addHandler={this.addHandler}
              Redirect={this.state.Redirect}
              deleteHandler={this.deleteHandler}
            />
          )}
        />
        <Route
          path="/form"
          render={props => (
            <NoteForm
              {...props}
              notes={this.state.notes}
              handleNoteChange={this.handleNoteChange}
              addHandler={this.addHandler}
              Redirect={this.state.Redirect}
            />
          )}
        />
        {/* <Route
          path="/note/:id/edit"
          render={props => (
            <NoteFormEdit
              {...props}
              notes={this.state.notes}
              handleNoteChange={this.handleNoteChange}
              addHandler={this.addHandler}
              Redirect={this.state.Redirect}
            />
          )} */}
        />
      </Container>
    );
  }
}

export default App;

