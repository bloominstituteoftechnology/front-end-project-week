import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from '../demoData';

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
            notes: data,
            currentNote: {
                tags: [],
                title: "",
                textBody: "",
                id: 0,
            },
            match: props.match,
            id: 1,
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
        const note = this.state.notes.filter(note => note.id === Number(id));
        this.setState({currentNote: note[0]});

    }

    render(){
        return(
            <StyledNote>
                <StyledButtons>
                    <StyledLink to={'./'}>edit</StyledLink>
                    <StyledLink to={'./'}>delete</StyledLink>
                </StyledButtons>
                <h4>{this.state.currentNote.title}</h4>
                <p>{this.state.currentNote.textBody}</p>
            </StyledNote>
        );
    }

}

export default Note;