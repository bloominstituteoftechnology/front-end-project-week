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
                        <h4><b>Travel</b></h4>
                        <hr />
                        <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">    
                        <h4><b>Food</b></h4>
                        <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>    
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">   
                        <h4><b>Estates</b></h4>
                        <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>    
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Trusts</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>London</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Paris</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Dubai</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Italy</b></h4>
                            <hr />
                            <p>Italy<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Turkey</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Turkey</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Turkey</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div class="container">
                        <Link className="ink" to="/noteview">
                            <h4><b>Turkey</b></h4>
                            <hr />
                            <p>Architect & Engineer<br /> Travel & Food<br /> Travel & Food<br /> Travel & Food</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}