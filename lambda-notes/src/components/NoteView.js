import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './NoteView.css';

class NoteView extends Component {
  render() {
    return (
      <div className="route-container">
        {/* <div className="navigation-bottom"> */}
          <Route exact path="/SingleNoteView" component={NoteView} />
          <Route path="/CreateNewView" component={CreateNewView} />
        {/* </div> */}
      </div>
    );
  }
}

export default NoteView;