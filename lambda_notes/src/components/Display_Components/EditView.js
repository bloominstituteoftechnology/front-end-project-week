import React, { Component } from 'react'
import axios from 'axios';

export default class EditView extends Component {


    componentDidMount() {
        
    }

    editNote = (id) => {
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
        .then( res => {
            this.setState({
            notes: res.data,
            })
        })
        .catch( err => {
            throw new Error(err);
        })
        
    }

    render() {
        return (
            <div> 
                Edit
            </div>
        )
    }
}
