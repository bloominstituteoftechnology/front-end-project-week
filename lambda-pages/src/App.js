// Dependencies
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import fuzzyFilterFactory from 'react-fuzzy-filter';
// Components
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import LoginView from './views/LoginView';
import NoteView from './views/NoteView';
import NotesView from './views/NotesView';
import Sidebar from './components/Sidebar';
// Styles
import './styles/App.css';

const { InputFilter, FilterResults } = fuzzyFilterFactory();

class App extends Component {
  state = {
    path: this.props.location.pathname
  };

  componentDidMount() {
    this.setState({ path: this.props.location.pathname });
  }

  componentDidUpdate() {
    if (this.state.path !== this.props.location.pathname) {
      this.setState({ path: this.props.location.pathname });
    }
  }

  render() {
    return (
      <div className="App">
        {/* LOGIN */}
        <Route path="/login" component={LoginView} />

        
        {this.state.path !== '/login' && (
          <Route
            component={routerProps => (
              <Sidebar {...routerProps} InputFilter={InputFilter} />
            )}
          />
        )}
        {/* Routes */}
        <Route
          exact
          path="/"
          component={routerProps => (
            <NotesView {...routerProps} FilterResults={FilterResults} />
          )}
        />
        <Route path="/create-note" component={CreateNoteView} />
        <Route path="/note/:id/edit" component={EditNoteView} />
        <Route exact path="/note/:id" component={NoteView} />
      </div>
    );
  }
}

export default withRouter(App);


// Angelo Deleon FSW14