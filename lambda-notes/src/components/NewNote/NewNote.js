import React, { Component } from 'react';

import Button from '../Button/Button';

class NewNote extends Component {
    
    state ={
        title: "",
        body: ""
    }

    render() {
        return (
            <div>
                <div>Create New Note:</div>
                <input type="text" placeholder="Note Title"></input>
                <input type="text" placeholder="New Content"></input>
            </div>
        )
    }
}








export default NewNote;