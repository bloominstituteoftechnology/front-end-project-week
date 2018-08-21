import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class updateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateTitle: '',
            updateText: ''
        };
    }

handleUpdate = event => {
    this.setState({[event.target.name]: event.target.value });
};




}

export default updateForm; 