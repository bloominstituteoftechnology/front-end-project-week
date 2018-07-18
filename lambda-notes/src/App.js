import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Form from './components/Form';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import { getNotes, addNote } from './actions';

class App extends Component {
  state = {
    title: "",
    textBody: ""
  }

  componentDidMount() {
    this.props.getNotes();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const newNote = { title: this.state.title, textBody: this.state.textBody }
    this.props.addNote(newNote);
    this.props.getNotes();
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  }

  render() {
    if (!this.props.notes) {
      return (
        <div className="main-container"></div>
      )
    }

    return (
      <div className="container">
        <Sidebar />

        <Route exact path="/" render={ props =>
            <NoteList notes={this.props.notes} />
          }
        />

        <Switch>

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

        </Switch>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote })(App));
