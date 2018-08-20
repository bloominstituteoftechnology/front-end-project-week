import React from 'react';
import axios from 'axios';
import Note from './note.js';
import styled from 'styled-components';
const NotesList=styled.div`
width: 92.5%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
margin-left: 5%;
`
const NotesHeading=styled.h2`
text-align: left;
color:#424242
margin-left: 5%;
margin-top: 85px;
`
const NotesPage=styled.div`
background-color:#ddd;
width: 75%;
`
class Notes extends React.Component {
    constructor() {
        super();
        this.state={
            notes:[]
        }
    }
    componentDidMount() {
        axios.get('https://killer-notes.herokuapp.com/note/get/all').then(res=>this.setState({notes:res.data})).catch(err=>console.log(err));
    }
    render() {
        return(
            <NotesPage>
            <NotesHeading>Your Notes:</NotesHeading>
            <NotesList>
                {this.state.notes.map((e,i)=><Note key={i} data={e}></Note>)}
            </NotesList>
            </NotesPage>
        )
    }
}
export default Notes;