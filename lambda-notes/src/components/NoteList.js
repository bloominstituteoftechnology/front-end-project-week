import React, { Component } from 'react';
import Notecard from './Notecard';

class NoteList extends Component {
    render() {
        return (
            <div className='row'>
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
                <Notecard />
            </div>
        )
    }
}

export default NoteList;