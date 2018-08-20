import React, { Component } from 'react';

import Note from './Note';

export default class NoteDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Your Notes:</h2>
                </div>
                <div>
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>

        );
    };
};

// export default NoteDisplay;