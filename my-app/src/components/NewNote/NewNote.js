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
                    <h1> Create New Note: </h1>
                    <div className='Note-create'>
                            <input 
                                className='Note-title'
                                type='text'
                                placeholder='Note Title'
                                name='Note Title'
                            />
                            <textarea
                                className='Note-contented'
                                type='text'
                                placeholder='Note Content'
                                name='Note Content'
                            />
                        </div>
                    <button className= 'Note-button'> Save </button>
                </div>
            </div>
        )
    }
}

export default NewNote;