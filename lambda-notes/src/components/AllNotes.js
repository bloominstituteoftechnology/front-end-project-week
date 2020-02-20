//React
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

//CSS
import '../CSS/Note.css'

//Components
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
                // console.log(response)
            })
            .catch(error=> {
                console.log(error)
            })
    }

    updateNote = () => {
        console.log("HI FROM ALLNOTES")
    }



    render() {
        return (
            <div className="NoteContainer">
                <div className="MainNoteHeader">Your Notes:</div>
                <div className="main_note_div">
                    {this.state.notes.map(note => (
                        <div className="Note" key ={note._id}>
                            <NoteDetails
                                key = {note._id}
                                id = {note._id}
                                note = {note}
                                />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function NoteDetails({ note }) {
    return (
            <div>
                <Link to={`/notes/${note._id}`} style={{ textDecoration: 'none' }}>
                    <Notes
                        title = {note.title}
                        id = {note._id}
                        textBody = {note.textBody}
                    />
                </Link>
            </div>
    )
}