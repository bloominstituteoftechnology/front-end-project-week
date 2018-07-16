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
            notes: [{
                tags: [],
                title: "Learn Redux1",
                textBody: "You should really learn Redux, Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text. Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.",
                id: 1,
            }, 
            {
              tags: [],
              title: "Learn Redux2",
              textBody: "You should really learn Redux",
              id: 2,
            }, 
            {
              tags: [],
              title: "Learn Redux3",
              textBody: "You should really learn Redux",
              id: 3,
            }, 
            {
              tags: [],
              title: "Learn Redux4",
              textBody: "You should really learn Redux",
              id: 4,
            }, 
            {
              tags: [],
              title: "Learn Redux5",
              textBody: "You should really learn Redux",
              id: 5,
            }],
            currentNote: {
                tags: [],
                title: "Learn Redux0",
                textBody: "You should really learn Redux, Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text. Here's a note with a lot of text.Here's a note with a lot of text.Here's a note with a lot of text.",
                id: 1,
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
        console.log("match", this.state.match);
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