import React, { Component } from 'react';
import './NotesDisplay.css';

import { Link } from 'react-router-dom';
class NotesDisplay extends Component {
    constructor() {
        super();
        this.state = {
            note: []
        }
    }

    componentDidMount() {
        const note = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut deserunt consequuntur autem, deleniti perspiciatis placeat commodi inventore ducimus'];
        this.setState ({ note });
    }

    render() {
        return (
            <div className="Note">
                <div className= 'Note-feature'> 
                    <h1> Lambda Notes </h1>
                    <button className ='Note-buttons'>
                        <Link to= '/'> View Your Notes </Link>
                    </button>
                    <button className ='Note-buttons'>
                        <Link to= '/newNote'> +Create New Note </Link>
                    </button>
                </div>
                <div className='Note-content'>
                    <h1> Your Notes: </h1> 
                    <div className= 'Note-notesDisplay'>
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                        {this.state.note.map(note => {
                            return [<div className = 'Note-notes'> 
                            <Link to = '/noteView' >
                            <h3>Note Title:</h3> <p>{ note }</p>
                        </Link>
                        </div>];
                         })}
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesDisplay;
