import React from 'react';
import axios from 'axios';
import Note from './note.js';
import styled from 'styled-components';
const NotesList=styled.div`
width: 70%;
display: flex;
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
            <NotesList>
                {this.state.notes.map((e,i)=><Note key={i} data={e}></Note>)}
            </NotesList>
        )
    }
}
export default Notes;