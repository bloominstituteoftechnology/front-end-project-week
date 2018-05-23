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
                    <h3 className="text-white">Your Notes:</h3>
                    <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4> 
                        <hr/>
                        <p>Architect & Engineer</p> 
                    </div>
                    </div>
                    <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4> 
                        <hr/>
                        <p>Architect & Engineer</p> 
                    </div>
                    </div>
                     <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4> 
                        <hr/>
                        <p>Architect & Engineer</p> 
                    </div>
                    </div>
                </div>    
            );
    }
}