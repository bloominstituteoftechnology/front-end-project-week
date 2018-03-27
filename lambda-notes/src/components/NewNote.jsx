import React, { Component } from 'react';
import axios from 'axios';

class NewNote extends Component {
  state = {
    notes: [],
    note: {
        id: null,
        title: '',
        text: '',
        completed: false
      }
  }
}

export default NewNote;