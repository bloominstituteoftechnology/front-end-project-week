import React, { Component } from 'react';
import '../App.css';

export default class Notes extends Component {
    render() {
        return (
            <div className="App-noteCards">
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer</p>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        )
    }
}