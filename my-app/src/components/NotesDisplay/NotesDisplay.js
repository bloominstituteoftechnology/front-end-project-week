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
                <div className= 'Note-notesDisplay'>
                    <h1> Your Notes: </h1>
                    <Link to= '/noteView'>   
                        <div className='Note-notes'>
                            <h3> Note Title </h3> 
                            <p> 
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
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