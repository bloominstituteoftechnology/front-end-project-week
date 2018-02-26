import React, { Component } from 'react';

class EditView extends Component {
    render() {
        return (
            <div>
                <div>
                    Lambda Notes
           <div>View Your Notes</div>
                    <div>+ Create New Note</div>
                </div>

                <div>
                    Edit Note:
                    <input value="Note Title"></input>
                    <input value="Note Content and *Text to edit*"></input>
                    <div>Update</div>
                </div>
            </div>
        );
    }
}