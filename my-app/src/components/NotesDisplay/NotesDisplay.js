import React, { Component } from 'react';
import './NotesDisplay.css';

import { Link } from 'react-router-dom';
class NotesDisplay extends Component {
    render() {
        return (
            <div className="Note">
            <div className= 'Note-feature'> 
            <h1> Lambda Notes </h1>
            <button className ='Note-buttons'>
                <Link to= '/'> View Your Notes </Link>
            </button>
            <button className ='Note-buttons'>
                <Link to= '/newNote'> +Create New Notes </Link>
            </button>
            </div>
            <div className='Note-content'>
                <h1> Your Notes: </h1>
                <div className= 'Note-notesDisplay'>
                    <Link to= '/noteView'>   
                    <div>
                    <h3> Note Title </h3> 
                    <p className='Note-notes'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, molestias porro. 
                    Reiciendis velit accusamus ea laborum, adipisci facere possimus fugiat incidunt ullam architecto ad beatae eos 
                    rem, perferendis ex alias.
                    </p>
                    </div>
                    </Link>
                   
                </div>
            </div>
        </div>
        );
    }
}

export default NotesDisplay;