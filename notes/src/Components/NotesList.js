import React, { Component } from 'react'
import axios from 'axios';
import Note from './Note';


export default class NotesList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            newNote: {
                "tags": ["tag", "otherTag"],
                "title": "Note Title",
                "textBody": "Note Body",
            }
        }
    }

    componentDidMount() {
        axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
        .then(response => {
            this.setState({notes: response.data});
        })
        .catch(err => {
            console.log("error", err);
        });
    }

  render() {
    return (
        <Note notes = {this.state.notes} />   
        )
    }
}
