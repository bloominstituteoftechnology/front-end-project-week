import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App.css';

export class Notes extends Component {
    render(){
    return (
        <>
        <h2>Your Notes:</h2>
        <div className="Notes">
            {this.props.notes.map(note => {
                return (
                    <div>
                        <Link to={`/note/${note.id}`}>
                            <div className="Note">
                                <h3>{note.title}</h3>
                                <p>{note.text}</p>
                            </div>
                        </Link>
                        
                        
                    </div>
                )
            })}
            
        </div>
        </>
    )
  }
}
