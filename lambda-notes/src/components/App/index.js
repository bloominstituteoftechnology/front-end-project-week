import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, getNote, addNote, deleteNote } from "../../store/actions";

import "./style.css";
import SideBar from "../Sidebar";
import NoteList from "../NoteList";


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tags: [],
        title: "",
        textBody: "",
      }
    }

  componentDidMount() {
    this.props.getNotes();
  }

    render() {
      return (
        <div className="App">
        <SideBar />
        <NoteList />
        </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      notes: state.notes,
      error: state.error,
      loading: state.loading,
    }
  };

  // TEST
  
  export default connect(mapStateToProps, { getNotes, getNote, addNote, deleteNote } )(App);