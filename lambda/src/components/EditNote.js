import React, { Component } from 'react';

class EditNote extends Component {
    state = {
        name: '',
        text: '',
    }

    render() {
        return (
            <div className="EditNote">
                <h1>Edit Note:</h1>
                <form>
                    <input type="text" placeholder="New Title"></input>
                    <input type="text" placeholder="New Content"></input>
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;