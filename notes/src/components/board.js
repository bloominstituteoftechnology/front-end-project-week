import React, { Component } from 'react';
import Notes from './notes';

export default class Board extends Component {
    constructor() {
      super();
      this.state = {
          notes: 'London',
       active: true   
      };

    }
    render() {
            return (
                <div className="App-main">
                    <h3 className="main-header">Your Notes:</h3>
                    <div className="board-notes">
                        <Notes />
                        </div>

                </div>    
            );
    }
}