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

const NoteListDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    p{
        margin: 5px 0;
    }
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
                    <form>
                        <HeaderSearch onChange={this.props.searchFilter} placeholder="Search" />
                        <select name='sort' onChange={this.props.sortNotes}>
                            <option value="DEFAULT">Default</option>
                            <option value="ALPHABETICAL">Alphabetical</option>
                            <option value="NEWEST">Newest</option>
                        </select>
                    </form>
                </Header>
                <NoteListDiv>
               
                    {
                        this.props.notes.map(note => 
                            <NoteCard
                            note={note}
                            history={this.props.history}
                            />
                        )
                    }
                </NoteListDiv>
            </div>
        )
    }
}

export default NoteList;