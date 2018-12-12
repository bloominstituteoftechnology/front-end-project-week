import React, { Component } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';

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
            searchTerm: '',
            displayedNotes: []
        }
    }

    changeHandler = e => {
        this.setState ({
            ...this.state,
            searchTerm: e.target.value
        }, () => this.search(this.state.searchTerm));
    }
    
    search = searchTerm => {
        console.log('searching!');
        const options = {
          shouldSort: true,
          threshold: 0.5,
          location: 0,
          distance: 100,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          keys: [
            'title',
            'textBody'
          ]
        };
        const fuse = new Fuse(this.props.notes, options);
        const result = fuse.search(searchTerm);
    
        this.setState({
            ...this.state,
            displayedNotes: (result === '') ? (this.props.notes) : (result)
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
                        (() => this.search())
                    }
                    {this.state.displayedNotes.map(note => 
                        <NoteCard note={note} />
                    )}
                </NoteCardDisplay>
            </NotesListDiv>
        ); 
    }

}