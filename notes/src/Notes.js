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

    render() {
        return (
            <div className="MainView">
              <div className="ButtonColumn">
                <h1 className="LambdaNotes">Lambda Notes</h1>
              </div>
              <div className="NoteSpace">
              </div>
            </div>
        );
    }

}

export default Notes;