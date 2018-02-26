import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<Router>
    <div>
      <LeftBar />
      <Route path="/" component={AllNotes} exact />
      <Route path="/notes/:id" component={SingleNote} />
      <Route path="/new-note" component={NewNote} />
    </div>
  </Router>
    );
  }
}

export default App;