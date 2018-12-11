import React, { Component } from 'react';
import styled from 'styled-components';

import NoteCard from './NoteCard';

const Input = styled.input`
    background-color: rgba(255,255,255,0.1);
    border: 1px solid rgba(129,107,42,0.4);
    color: #a78b35;
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0 auto;
    margin: 4rem 0;
    width: 24rem;
    height: 3.4rem;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const NotesListDiv = styled.div`
    border-radius: 0 5px 5px 0;
    background-image: linear-gradient(rgba(137,90,178,0.1), rgb(251,190,175));
    width: 740px;
    max-height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

// const NotesListTitle = styled.div`
//     width: 100%;    
//     color: #FFF;
//     margin: 3.5rem 2.5rem;
//     margin-bottom: 1.75rem;
//     font-size: 2.6rem;
//     font-weight: 400;
// `

const NoteCardDisplay = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export default class NotesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    
    changeHandler = e => {
        this.setState ({
            searchTerm: e.target.value
        });
    }

    render() {
        return (
            <NotesListDiv>
                    <Input 
                        onChange={this.changeHandler} 
                        placeholder="Search" 
                        value={this.state.searchTerm}
                    />
                {/* <NotesListTitle>
                    Your Notes:
                </NotesListTitle> */}
                <NoteCardDisplay>
                    {(this.props.fetching) ? (<p>Loading...</p>) :
                        (this.props.notes.filter(note =>
                            note.title.includes(this.state.searchTerm)
                        ).map(note => 
                            { return <NoteCard note={note} /> }
                        ))
                    }
                </NoteCardDisplay>
            </NotesListDiv>
        ); 
    }

}