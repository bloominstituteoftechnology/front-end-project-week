import React, { Component } from 'react';

/* Notes.js
 * This is the real starting point for the app, where / will route to.
 */

class Notes extends Component {
  constructor(props) {
    super(props);

    // I'm not sure what we'll need in state just yet. 
    this.state = {
      name: "Jen",
    };
  };

  // We don't really need to be pulling any data yet - I think.
  // componentDidMount() {};

  render() {
    return(
      <div className="appNotes">Notes.js</div>
    );
  };
};

export default Notes;