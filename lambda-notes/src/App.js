import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import Form from './components/Form';
import Note from './components/Note';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    notes: [],
    title: "",
    textBody: ""
  }

  componentWillMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <Sidebar />

        <Route exact path="/" render={ props =>
            <NoteList notes={this.state.notes} />
          }
        />

        <Switch>

          <Route path="/notes/add" render={ props =>
              <Form title={this.state.title}
                    textBody={this.state.textBody}
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

export default App;
