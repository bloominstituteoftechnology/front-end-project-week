import React from 'react';
import { Link } from 'react-router-dom';

const NoteView = props => {
    return (
        <div className="noteView">
            <header>
                <a href="#">
                    edit
                </a>
                <a href="#">
                    delete
                </a>
            </header>
            <h2>Note Name</h2>
            <p>
                Note Content
            </p>
        </div>
    )
}