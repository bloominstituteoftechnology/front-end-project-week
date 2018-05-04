import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';


class Notes extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          notes: [
              { id: 0, title: "Example Note", body: "here is an example note" }
          ],
        }
    }
    
    createNew = () => {

    }

    viewExisting = () => {

    }

    editExisting = () => {

    }

    deleteExisting = () => {

    }
}

export default Note;