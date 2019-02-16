import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

class EditNote extends Component {
  constructor(props) {
      super(props);
      this.state = {
          noteToEdit: {},
          updatedTitle: null,
          updatedText: null,
          loading: true
      }
  }


  
}