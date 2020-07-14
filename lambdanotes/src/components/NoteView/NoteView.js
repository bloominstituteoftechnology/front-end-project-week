import React from 'react';
import './NoteView.css';
import { Link } from "react-router-dom";
import DeleteModal from '../DeleteNote/DeleteNote';

import styled from  'styled-components';

//============ STYLED COMPONENTS =======================

const NoteViewContainer = styled.div`
    background: #E7E6E7;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 40px;
`;

const Title = styled.h2`
    text-align: start;
    margin: 0 20px;
`;

const Text = styled.p`
    text-align: justify;
    margin: 20px;; 
`;



class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {}
        };
        console.log("NoteView", props);
    }
    
    componentDidMount() {
        const note = this.state.notes.find(note => note.id == this.props.match.params.id);
        console.log("note", note)
        if (!note) return;
        this.setState({note});
    }
    
     render() {
        return (
            <NoteViewContainer>
                <LinksContainer>
                    <Link to={`/note-view/${this.state.note.id}/edit`} className="link">edit</Link>
                    <DeleteModal note={this.state.note} deleteNote={this.props.deleteNote}>delete</DeleteModal>
                </LinksContainer>
                <div className="body-container">
                    <Title>{this.state.note.title}</Title>
                    <Text>{this.state.note.textBody}</Text>
                </div>
            </NoteViewContainer>
        );
    }
};

 export default NoteView; 