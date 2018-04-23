import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
            }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        alert('It was Submitted' + this.state.value);
    }

 
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Create New Note:
                </label>
                <input
                    type='text'
                    placeholder='Note Title'
                    name='note'
                    onChange={this.handleChange} 
                />
                 <input
                    type='text'
                    placeholder='New Content'
                    name='content'
                    onChange={this.handleChange} 
                />
                <input type='submit' value='Save'/>
            </form>
        );
    }
}

export default Input;