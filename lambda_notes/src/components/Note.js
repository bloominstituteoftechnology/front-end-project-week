import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNote = styled.div`
    display: flex;
    flex-flow: column;
    background: #F3F3F3;
    width: 100%;
    padding: 2%;
    align-items: flex-start;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    border-bottom: 1px solid black;
    margin: 1%;
`;

class Note extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: props.notes,
            currentNote: {},
            match: props.match,
            id: 1,
            defaultNote:{
                tags: [],
                title: "Error With Note, Please return to Homepage",
                textBody: "",
                id: 0,
            }
        }
    }

    componentDidMount(){
        const id = this.state.match.params.id;
        this.setState({id: id});
        this.getNote(id);
    }

    componentWillReceiveProps(newProps){
        if(this.state.id !== newProps.match.params.id){
            this.getNote(newProps.match.params.id);
        }
    }
    getNote = id => {
        const note = this.state.notes.reduce((acc,note) => {
            note.id === Number(id) ? acc = note : null;
            return acc;
        },{})
        this.setState({currentNote: (note || this.state.defaultNote)});

    }

    render(){
        return(
            <StyledNote>
                <StyledButtons>
                    <StyledLink to={`/edit/${this.state.id}`}>edit</StyledLink>
                    <StyledLink to={`/notes/${this.state.id}/delete`}>delete</StyledLink>
                </StyledButtons>
                <h4>{this.state.currentNote.title}</h4>
                <p>{this.state.currentNote.textBody}</p>
            </StyledNote>
        );
    }

}

export default Note;