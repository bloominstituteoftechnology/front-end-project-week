import React, { Component } from 'react'

import { notes } from '../notes';

class EditNote extends Component{
    constructor(){
        super();
        this.state = {
            editNote: '',
            notes: notes
        }
    }

    handleInputChange(event) {
        this.setState({ editNote: event.target.value });
    }


    render(){
        return(
        <div className='page-container'>
        <div className='page-title'>Edit Note:</div>
        <input type='text' onChange={this.handleInputChange} />
       
        </div>
        )
    }
}

export default EditNote;