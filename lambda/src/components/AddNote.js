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
                    <input className="Inputtext" type="text" name="name" placeholder="New Title"></input>
                    <input className="Inputfield" type="text" name="text" placeholder="New Content"></input>
                    <button className="Button" onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;