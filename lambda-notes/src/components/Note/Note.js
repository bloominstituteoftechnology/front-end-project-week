import React, { Component } from 'react';

import './Note.css';

class Note extends Component {
    render() {
        return (
            <div class='note'>
                <div class='note-body'>
                    <h5>Note Title</h5>
                    <p>Some note text... What am I doing? I hope this project turns out well. I think I forgot how to add Bootstrap without CDM. I definitely forgot how to add LESS to my projects. I hope I have enough time to add it to this project later on.</p>
                </div>
            </div>
        )
    }
}

export default Note;