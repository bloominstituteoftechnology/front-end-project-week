import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import ListOfNotes from "./components/ListofNotes";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";
import EditNote from "./components/EditNote";
import { getNotes, deleteNote } from "./actions";
import { connect } from "react-redux";
import Searchbar from "./components/Searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  componentDidMount() {
    this.props.getNotes();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.serverConfirmation.count !==
        prevProps.serverConfirmation.count ||
      this.props.singleNote._id !== prevProps.singleNote._id
    ) {
      this.props.getNotes();
    }
  }

  toggleModal = () => {
    let modal = document.getElementById("modal");
    modal.classList.toggle("modal");
  };

  deleteHandler = event => {
    event.preventDefault();
    this.props.deleteNote(this.props.singleNote._id);
    this.props.history.push("/");
    this.toggleModal();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.props.isFetching || !this.props.notes) {
      return (
        <div className="loading-image">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading-gif"
          />
        </div>
      );
    }

    return (
      <div className="App">
        <div id="modal" className="hidden">
          <div className="confirmation-modal">
            <p>Are you sure you want to delete this?</p>
            <div className="delete-button" onClick={this.deleteHandler}>
              Delete
            </div>
            <div onClick={this.toggleModal}>No</div>
          </div>
        </div>

        <section className="nav-section">
          <h1>Lambda Notes</h1>
          <NavLink exact to={"/"}>
            View Your Notes
          </NavLink>
          <NavLink to={"/add-note"}>+ Create New Note</NavLink>
        </section>

        <section className="content-container">
          <Searchbar
            handleChange={this.handleChange}
            {...this.props}
            searchText={this.state.searchText}
          />
          <Route
            exact
            path="/"
            render={props => (
              <ListOfNotes
                {...props}
                {...this.props}
                searchText={this.state.searchText}
              />
            )}
          />
          <Route
            path="/add-note"
            render={props => <AddNote {...props} {...this.props} />}
          />
          <Route
            exact
            path={`/note/:id`}
            render={props => (
              <NoteCard
                {...props}
                toggleModal={this.toggleModal}
                {...this.props}
              />
            )}
          />
          <Route
            exact
            path={"/edit-note/:id"}
            render={props => <EditNote {...props} {...this.props} />}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    isFetching: state.isFetching,
    error: state.error,
    singleNote: state.singleNote,
    serverConfirmation: state.serverConfirmation
  };
}

export default connect(
  mapStateToProps,
  { getNotes, deleteNote }
)(App);
