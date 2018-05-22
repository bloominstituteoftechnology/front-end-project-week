import React, { Component } from 'react';

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
                <div className="main">
                    <h1 className="text-white">Your Notes:</h1>
                </div>
            );
    }
}