import React, { Component } from 'react';

class NewView extends Component {
    render() {
        return (
            <div>
                <div>
                    Lambda Notes
           <div>View Your Notes</div>
                    <div>+ Create New Note</div>
                </div>

                <div>
                    Create New Note
                    <input value="Note Title"></input>
                    <input value="Note Content"></input>
                    <div>Save</div>
                </div>
            </div>
        );
    }
}

export default NewView;