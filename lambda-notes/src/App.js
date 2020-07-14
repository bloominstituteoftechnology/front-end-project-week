import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchNote } from "./actions/notesAction";
import { getUser } from "./actions/userAction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";
import Note from "./components/Note";
import Login from "./components/Login";
import SideBar from './components/SideBar';
import ShowNote from "./components/ShowNote";
import NoteEdit from "./components/NoteEdit";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNote();
    this.props.getUser();
  }

  render() {
    return (
      <div className="App">
          {this.props.user === null ? <Login /> : (
            <div>
              <Header />
              <section className="main">
              <SideBar />
                  <Route path="/" component={() => <NotesList myNotes={this.props.notes}/>} exact/>
                  <Route path="/new" component={AddNoteForm} exact/>
                  <Route path="/show/:id" component={ShowNote} />
                  <Route path="/edit/:id" component={NoteEdit} />
              </section>
            </div>
            )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    notes: state.notes
  }
}

export default connect(mapStateToProps, {getUser, fetchNote})(App);


