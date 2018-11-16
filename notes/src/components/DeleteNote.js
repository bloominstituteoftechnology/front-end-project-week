import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class DeleteNote extends Component {
    constructor(){
        super()
        this.state = {
            open: true,
        }
    }

    deleteItem = id => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {this.setState(
                {open: false}
            )})
            .catch(err => console.log(err))
        this.
    }
}