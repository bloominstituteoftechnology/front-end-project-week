import React, { Component } from 'react';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            noteTitle: '',
            noteContent: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.setState({noteTitle: value})
    }
}