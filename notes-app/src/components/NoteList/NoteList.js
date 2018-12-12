import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NoteCard from './NoteCard';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const HeaderSearch = styled.input`
    margin-left: 20px;
    padding: 5px;
    background: darkgray;
    color: white;
    border-radius: 10px;
`;

class NoteList extends Component {

    componentDidMount(){
        this.props.searchFilter({ target: { value: ''}})
    }

    render() {
        return (
            <div className = 'note-list-view'> 
                <Header>
                    <h2>Your Notes:</h2>
                    <form><HeaderSearch onChange={this.props.searchFilter} placeholder="Search" /></form>
                </Header>
                <div className='note-list'>
               
                    {
                        this.props.notes.map(note => 
                            <NoteCard
                            note={note}
                            history={this.props.history}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NoteList;