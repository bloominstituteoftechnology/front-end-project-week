import React, { Component } from 'react'


class EditNote extends Component{
    constructor(){
        super();
        this.state = {
            editNote: ''
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