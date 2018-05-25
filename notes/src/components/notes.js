import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Notes extends Component {

    saveNote = () => {
        const addToSaved = this.props.addToSaved;
        addToSaved(this.state.notes);
    };

    render() {
        return (
            <div className="App-noteCards">
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">    
                        <h4><b>Note Title</b></h4>
                        <hr />
                        <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">    
                        <h4><b>Note Title</b></h4>
                        <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>    
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">   
                        <h4><b>Note Title</b></h4>
                        <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>    
                    </div>
                </div>
            </div>
        )
    }
}