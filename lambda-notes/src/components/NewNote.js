import React, { Component } from 'react';

export default class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }
    
    render = () => {
    const { title, content } = this.state;
    return (
        <div className='page add-note'>
        <div>
            <h2>Add New Note</h2>
            <div>
                <form>
                    <div>
                        <input
                        type='text'
                        placeholder='Note Title'
    )   
    }
}
};

export default NewNote; 
