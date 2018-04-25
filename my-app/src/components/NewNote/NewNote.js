import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NewNote.css';

class NewNote extends Component {
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
                <div className='Note-content'>
                        <div className='Note-create'>
                        <h2> Create New Note: </h2>
                        <input
                            type='text'
                            placeholder='Note Title'
                            name='Note Title'
                        />
                        <input
                            type='text'
                            placeholder='Note Content'
                            name='Note Content'
                        />
                        <button> Save </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewNote;