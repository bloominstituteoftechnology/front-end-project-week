import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import DeleteNoteModal from './DeleteNoteModal';
import {deleteNote, setCurrentNote} from '../actions/actions';

const NoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width 100%;
    padding: 0 4%;
`;

const DisplayButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;

    button{
        margin-left: 10px;
        border: none;
        color: #5a5452;
        background-color: #f2f1f2;
        text-decoration: underline;
        cursor: pointer;
        outline-style: none;

        &:hover{
            color: white;
        }
    }
`;

const DisplayBody = styled.div`
    display: flex;
    flex-direction: column;
    width 100%;

    h2{
        font-size: 2.2rem;
        margin: 15px 0 25px 0;
    }

    p{
        font-size: 1.4rem;
        line-height: 2.0;
    }
`;

class DisplayNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            confirmDelete: false
        }
    }

    editNote = (event)=>{
        event.preventDefault();
        this.props.history.push(`/edit/${this.props.note.id}`);
    }

    confirmDelete = (event)=>{
        event.preventDefault();
        this.setState({confirmDelete: true});
    }

    deleteNote = (deleteNote)=>{
        this.setState({confirmDelete: false});
        if(deleteNote){
            this.props.deleteNote(this.props.note.id, this.props.notes);
            this.props.history.push('/');
        }
    }

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
        }
        
        return(
            <NoteContainer>
                <DisplayButtons>
                    <button onClick={this.editNote}>edit</button>
                    <button onClick={this.confirmDelete}>delete</button>
                </DisplayButtons>
                <DisplayBody>
                    <h2>{this.props.note.note_title}</h2>
                    <p>{this.props.note.note_content}</p>
                </DisplayBody>
                {this.state.confirmDelete ? <DeleteNoteModal deleteNote={this.deleteNote}/> : null}
            </NoteContainer>
        )
    }
}

const mapStateToProps = state=>{
    return{
        notes: state.notes,
        note: state.currentNote
    }
}

export default withRouter(connect(mapStateToProps, {deleteNote, setCurrentNote})(DisplayNote));