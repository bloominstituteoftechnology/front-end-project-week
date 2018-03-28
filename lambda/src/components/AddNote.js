import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        name: '',
        text: '',
    }

    render() {
        return (
            <div className="AddNote">
                <h1>Create New Note:</h1>
                <form>
                    <input type="text" placeholder="New Title"></input>
                    <input type="text" placeholder="New Content"></input>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;