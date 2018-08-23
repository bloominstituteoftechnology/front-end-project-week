import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import  SideBar from './SideBar';
import  NoteCard from './NoteCard';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Note from './Note';
const Onecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;

const List = styled.div`

    display: flex;
`;

 class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:props.notes,
            note:props.note,
            id: null,
            deleteNote: props.deleteNote,
            editNote: props.editNote
        }
        
    }
componentDidMount () {
    const id = this.props.match.params.id;
    this.setState({id:Number(id),notes:this.props.notes})
}
filterNotes = note => {
    if (note.id===this.state.id) {
        return(
            <div key={note.id}>
            <p>{note.notetitle}</p>
            <p>{note.notebod}</p>
            </div>
        )
    }
}



render(){
const oneNote = this.props.notes.map(this.filterNotes);
const del = this.state.deleteNote;
const edit = this.state.editNote;
 const id = this.props.match.params.id;
//  onClick={() =>edit(id)}
    return (
        <Onecont>
        {oneNote}
        <button > <Link to={`/edit/${id}`}>edit</Link>
            </button>
            <button onClick={() =>del(id)}> <Link to="/delete">delete</Link>
             </button>
        </Onecont>
    )
    // <List > 
    // {/* <SideBar /> */}
    // <Onecont>
    // <div>title</div> 
    // <p>body</p>
    
    // <button> <Link to="edit">edit</Link>
    //         </button>
    //         <button> <Link to="/delete">delete</Link>
    //         </button>
    // </Onecont>
    //     </List>);
}}
export default OneNote






 