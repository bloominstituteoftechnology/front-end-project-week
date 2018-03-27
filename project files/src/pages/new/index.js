import React, { Component } from 'react'

class NewNote extends Component{
    constructor(){
        super();
        this.state = {
            newNote: ''
        }
    }

    handleInputChange(event) {
        this.setState({ newNote: event.target.value });
    }


    render(){
        return(
        <div className='page-container'>
        <div className='page-title'>New Note:</div>
        <input type='text' onChange={this.handleInputChange} />
        </div>
        )
    }
}

export default NewNote;