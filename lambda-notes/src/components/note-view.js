import React, { Component } from 'react';

class NoteView extends Component {
    render() {
        return (
            <div>
                <div>
                    Lambda Notes
           <div>View Your Notes</div>
                    <div>+ Create New Note</div>
                </div>

                <div>
                    Note Name
                    <a href="#">edit</a>
                    <a href="#">delete</a>
                    <input value="Note Title"></input>
                    <input value="Note Content"></input>
                    <div>Save</div>
                </div>
            </div>
        );
    }
}