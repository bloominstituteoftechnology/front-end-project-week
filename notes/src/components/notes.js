import React, { Component } from 'react';

export default class Notes extends Component {
    render() {
        return (
            <div classname="noteCards">
            <div className="card">
                <div class="container">
                    <h4><b>Note Title</b></h4>
                    <hr />
                    <p>Architect & Engineer</p>
                        <p>Travel & Food</p>
                    <button onClick={this}>Delete</button>    
                </div>
            </div>
            <div className="card">
                <div class="container">
                    <h4><b>Note Title</b></h4>
                    <hr />
                    <p>Architect & Engineer</p>
                        <p>Travel & Food</p>
                    <button onClick={this}>Delete</button>    
                </div>
            </div>
            <div className="card">
                <div class="container">
                    <h4><b>Note Title</b></h4>
                    <hr />
                    <p>Architect & Engineer</p>
                        <p>Travel & Food</p>
                    <button onClick={this}>Delete</button>    
                </div>
                </div>
            </div>    
        )
    }
}