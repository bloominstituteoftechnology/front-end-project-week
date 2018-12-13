import React, { Component } from 'react';

import { Route } from 'react-router';

import Navigation from './components/Navigation/Navigation';
import YourNotes from './components/Notes/YourNotes';
import NotePage from './components/Notes/NotePage';
import NewNoteForm from './components/NewNote/NewNoteForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ YourNotes } /> {/* home page, displays all notes */}
        <Route path={`/notes/:id`} render={(props) => <NotePage {...props} />} />  {/* individual note page */}
        <Route path={'/new-note'} component={ NewNoteForm } />  {/* add note form */}
      </div>
    );
  }
}

export default App;
