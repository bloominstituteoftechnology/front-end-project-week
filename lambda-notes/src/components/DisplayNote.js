import React, {Component} from 'react';
import styled from 'styled-components';

import DeleteNoteModal from './DeleteNoteModal';

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

    componentDidMount(){
        this.props.setCurrentNoteID(this.props.match.params.id);
    }

    editNote = ()=>{
        this.props.history.push(`/edit/${this.props.note._id}`);
    }

    confirmDelete = ()=>{
        this.setState({confirmDelete: true});
    }

    deleteNote = (deleteNote)=>{
        this.setState({confirmDelete: false});
        if(deleteNote){
            this.props.deleteNote(this.props.note._id);
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
                    <h2>{this.props.note.title}</h2>
                    <p>{this.props.note.textBody}</p>
                </DisplayBody>
                {this.state.confirmDelete ? <DeleteNoteModal deleteNote={this.deleteNote}/> : null}
            </NoteContainer>
        )
    }
}

export default DisplayNote;