import React from 'react';
import axios from 'axios';
import Notes from './Note';

import './ComponentStyle.css';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <Notes notes={this.state.notes} />;
  }
}

export default NotesList;
