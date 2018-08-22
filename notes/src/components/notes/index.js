import React from 'react';
import Note from './note.js';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getNotes} from '../../actions';
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
margin-top: 70px;
`
const NotesPage=styled.div`
background-color:#ddd;
min-height: 100vh;
width: 75%;
`
class Notes extends React.Component {
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        this.props.getNotes();
    }
    render() {
        return(
            <NotesPage>
            <NotesHeading>Your Notes:</NotesHeading>
            <NotesList>
        {!this.props.fetchingNotes?this.props.notes.map((e,i)=><Note key={i} data={e}></Note>):null}
            </NotesList>
            </NotesPage>
        )
    }
}
const mapStateToProps=state=>{
    return{
        notes:state.notes,
        fetchingNotes:state.fetchingNotes
    }
}
export default connect(mapStateToProps,{getNotes})(Notes);