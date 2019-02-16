import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Notes from '../components/Notes';

export default class AllNotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
    }

    componentDidMount() {
        axios
            .get("https://fe-notes.herokuapp.com/note/get/all")
            .then(response => {
                this.setState(() => ({notes: response.data}))
            })
            .catch(error=> {
                console.log(error)
            })
    }

    updateNote = () => {
        console.log("HI FROM ALLNOTES")
    }



    render() {
        // console.log(this.props)
        // console.log(this.state.notes)
        return (
            <div>
                <ul>
                    {this.state.notes.map(note => (
                        <div key ={note._id}>
                            <NoteDetails
                                key = {note._id}
                                id = {note._id}
                                note = {note}
                                />
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

function NoteDetails({ note }) {
    // console.log(note.title)
    return (
        <Link to={`/notes/${note._id}`}>
            <Notes
                title = {note.title}
                id = {note._id}
                textBody = {note.textBody}
            />
        </Link>
    )
}