import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Delete from '../Delete/Delete';
import './Notes.css';

class Notes extends Component {
    render() {
        return(
            <div className="Note">
                <div className='Note-feature'> 
                    <h1> Lambda Notes </h1>
                    <button className ='Note-buttons'>
                        <Link to= '/'> View Your Notes </Link>
                    </button>
                    <button className ='Note-buttons'>
                        <Link to= '/newNote'> +Create New Notes </Link>
                    </button>
                </div>
                <div className='Note-holder'>
                    <div className='Note-links'>
                        <Link to= '/edit'> edit </Link>
                        <Delete />
                    </div>
                    <div className='Note-body'>
                        <h1> Note Name </h1>
                        <p> 
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nulla vitae error commodi. Beatae, ea! Unde veniam voluptas earum fugit quasi, nemo aperiam vero! Fugit, repellat. Iste quos sunt amet.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notes;