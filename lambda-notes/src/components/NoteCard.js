//IMPORTS
import React, { Component } from 'react';

class NoteCard extends Component {
    render() {
        return (
            <div className='col-4'>
                <h1>Note Title</h1>
                <p>"Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …"</p>
            </div>
        )
    }
}

export default NoteCard;