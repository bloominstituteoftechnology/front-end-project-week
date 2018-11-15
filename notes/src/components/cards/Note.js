import React, { Component } from 'react';
import axios from 'axios';

export default class Note extends Component {
    constructior(props) {
        super(props);
        this.state = {
            note: null,
        };
    }


    fetchNote = id => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error('Please Work');
            })
    }
    render() {

    }
    return(


    )
}


export default Note;