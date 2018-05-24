import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Notes extends Component {
    render() {
        return (
            <div className="App-noteCards">
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        <Link to="/editnote">Edit</Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer<br/> Travel & Food<br/> Travel & Food<br/> Travel & Food</p>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer<br/> Travel & Food<br/> Travel & Food<br/> Travel & Food</p>
                    </div>
                </div>
            </div>
        )
    }
}