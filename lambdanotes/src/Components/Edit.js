import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
    
    editNote = (id) => {
        const updatedNote = {
            title: '',
            textBody: ''
        }
        axios 
            .put(`https://fe-notes.herokuapp.com/note/${id}`, updatedNote)
            .then(response => this.setState({ note: response.data}))
            .catch(error => console.log(error))

    }; 
};
export default Edit;