import React, { Component } from 'react';

//React 
import axios from 'axios';
import { Link } from "react-router-dom";
import styled from 'styled-components';


//Components
import Notes from '../components/Notes';

//styled components
const MainNoteDiv = styled.div`
    background-color: #e5e5e5;
    width: 900px;
`
    const MainNoteHeader = styled.div`
        margin: 30px 0px 0px 60px;
        font-weight: bold;
        font-size: 40px;
    `
    const NoteContainer = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
    `
        const Note = styled.div`
            background-color: white;
            margin: 10px 10px 10px 10px;
            width: 200px;
            height: 250px;
        `

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
            <MainNoteDiv>
                <MainNoteHeader>Your Notes:</MainNoteHeader>
                <NoteContainer>
                    {this.state.notes.map(note => (
                        <Note key ={note._id}>
                            <NoteDetails
                                key = {note._id}
                                id = {note._id}
                                note = {note}
                                />
                        </Note>
                    ))}
                </NoteContainer>
            </MainNoteDiv>
        )
    }
}

function NoteDetails({ note }) {
    // console.log(note.title)
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