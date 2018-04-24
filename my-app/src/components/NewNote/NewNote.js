import React, { Component } from 'react';

class NewNote extends Component {
    render() {
        return(
            <div className="Note">
                <div className='Note-feature'> 
                    <h1> Lambda Notes </h1>
                    <p className = 'Note-buttons'> View Your Notes </p> 
                    <p className = 'Note-buttons'> +Create New Notes </p> 
                </div>
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
                </div>
            </div>
        )
    }
}

export default NewNote;