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
    margin: 4rem 0 2rem 0;
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

const NotesListTitle = styled.div`
    text-align: right;
    width: 100%;    
    color: #DC7DC7;
    padding-right: 4.5rem;
    margin-bottom: 1.75rem;
    font-size: 1.45rem;
    font-weight: 300;
    line-height: 1.5;
`

const ExportLink = styled.a`
    font-size: 1.7rem;
    &:hover {
        cursor: pointer;
        color: #885885;
    }
`

const SortLink = styled.span`
    font-size: 1.7rem;
    margin-left: 2rem;
    color: #DDDDDD;
    &:hover {
        cursor: pointer;
        color: #999999;
    }
`

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
            notes: this.props.notes,
            displayedNotes: this.props.notes
        }
    }

    changeHandler = e => {
        this.setState ({
            ...this.state,
            searchTerm: e.target.value
        }, () => this.search(this.state.searchTerm));
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes !== prevProps.notes) {
            this.setState({
                ...this.state,
                notes: this.props.notes,
                displayedNotes: this.props.notes
            })
        }
    }

    sortNotes = sort => {
        switch (sort) {
            case 'title':
                return this.setState({
                    ...this.state,
                    displayedNotes: this.state.notes.slice().sort(function(a, b) { 
                        if (a.title.toLowerCase() < b.title.toLowerCase()) {
                            return -1;
                        }
                        else return 1;
                    })
                })
            case 'recent':
                return this.setState({
                    ...this.state,
                    displayedNotes: this.state.notes.slice().reverse()
                })
            default:
                return this.setState({
                    ...this.state
                })
        }
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
            displayedNotes: (searchTerm === '') ? (this.props.notes) : (result)
        });
    }

    exportNotes = () => {
        let data = this.state.displayedNotes.slice();
        let result = 'data:text/csv;charset=utf-8,Title,Content\n';
        data.forEach(x => {
            result += x.title + ',' + x.textBody + '\n';
        })
        return encodeURI(result);
    }

    render() {
        return (
            <NotesListDiv>
                <Input 
                    onChange={this.changeHandler} 
                    placeholder="Search" 
                    value={this.state.searchTerm}
                />
                <NotesListTitle>
                    <ExportLink href={this.exportNotes()} download="export.csv" >export notes</ExportLink><br/>
                    <span>sort by</span>
                    <SortLink onClick={() => this.sortNotes('title')}>Title</SortLink>  
                    <SortLink onClick={() => this.sortNotes('recent')}>Most Recent</SortLink>
                </NotesListTitle>
                <NoteCardDisplay>
                    {(this.props.fetching) ? (<p>Loading...</p>) :
                        null
                    }
                    {this.state.displayedNotes.map(note => 
                        <NoteCard note={note} />
                    )}
                </NoteCardDisplay>
            </NotesListDiv>
        ); 
    }

}