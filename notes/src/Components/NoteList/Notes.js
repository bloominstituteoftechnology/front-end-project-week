import React, { Component } from 'react';
import axios from 'axios';

import './Notes.css';

/* Notes.js
 * List all of the notes
 */

class Notes extends Component {
  constructor(props) {
    super(props);

    // I'm not sure what we'll need in state just yet. 
    this.state = {
      name: "Jen",
      notes: [],
    };
  };

  // Pull data from the API
  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then( (response) => {
        this.setState( () => ({ notes: response.data }) )
      })
      .catch( (error) => console.error(error) );
  };

  render() {
    return(
      <div className="appNotes">
        <h2>Your Notes:</h2>
      </div>
    );
  };
};

export default Notes;