import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Edit extends Component {
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
            <div className='Note-create'>
                <h2> Edit Note: </h2>
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
                <button> Update </button>
             </div>
        </div>
        )
    }
}

export default Edit;