import React, { Component } from 'react';

import './Note.css';

class Note extends Component {
    render() {
        return (
            <div class='note'>
                <div class='note-body'>
                    <h6 className='note-header'>Godard plaid</h6>
                    <p>Cardigan pitchfork kale chips, scenester roof party farm-to-table microdosing post-ironic affogato prism la croix chambray selfies whatever. Kitsch woke hella ugh, street art bitters pickled chillwave pug cornhole.</p>
                </div>
            </div>
        )
    }
}

export default Note;