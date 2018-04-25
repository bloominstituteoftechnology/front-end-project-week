import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../Delete/Delete';

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
                <Link to= '/edit'> edit </Link>
                <Delete />
                <div className='Note-create'>
                    <h2> Note Name </h2>
                </div>
            </div>
        );
    }
}

export default Notes;