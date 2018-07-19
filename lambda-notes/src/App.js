import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Form from './components/Form';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import NoMatch from './components/NoMatch';
import { getNotes, addNote } from './actions';

class App extends Component {
  state = {
    filteredNotes: [],
    searchPhrase: "",
    title: "",
    textBody: ""
  }

  // fetches all notes from server and passes them to store
  componentDidMount() {
    this.props.getNotes();
  }

  // adjusts state of title and textBody whenever there is new input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSearchChange = e => {
    this.setState({ searchPhrase: e.target.value });
    setTimeout(() => {
      const notes = this.props.notes.filter(note => {
        return (
          note.title.includes(this.state.searchPhrase) ||
          note.textBody.includes(this.state.searchPhrase)
        )
      });
      this.setState({ filteredNotes: notes });
    }, 1);
  };

  // sends current state of title and textBody to server, resets state, redirects to home page
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.addNote({ title: this.state.title, textBody: this.state.textBody });
    this.setState({ title: "", textBody: "" });
    if (!this.props.fetchingNotes) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <Sidebar searchPhrase={this.state.searchPhrase}
                 handleSearchChange={this.handleSearchChange} />

        <Switch>

          <Route exact path="/" render={ props =>
              <NoteList notes={this.state.filteredNotes.length > 0 ? this.state.filteredNotes : this.props.notes}
                        fetchingNotes={this.props.fetchingNotes} />
            }
          />

          <Route path="/notes/add" render={ props =>
              <Form type={"new"}
                    title={this.state.title}
                    textBody={this.state.textBody}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
              />
            }
          />

          <Route path="/notes/:id" render={ props =>
              <Note {...props} />
            }
          />

          <Route render={ props =>
              <NoMatch missing={"route"}/>
            }
          />

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote })(App));
