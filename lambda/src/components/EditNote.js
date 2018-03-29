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
                    <input className="Inputtext" type="text" name="name" placeholder="New Title"></input>
                    <input className="Inputfield" type="text" name="name" placeholder="New Content"></input>
                    <button className="Button" onClick={this.handleSubmit}>Update</button>
                </form>
            </div>
        );
    }
}

export default EditNote;