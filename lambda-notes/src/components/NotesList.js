import React, { Component } from 'react';
import Note from './Note.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = styled.div`
    margin-top: 50px;
    width: 80%;
`

const NotesView = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const ViewTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
    margin-left: 23px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`

class NotesList extends Component   {

    render()    {
        return(
            <ListView>
                <ViewTitle>
                    Your Notes:
                </ViewTitle>
                <NotesView>
                    {this.props.notes.map((note, index)  =>  {
                        return <StyledLink to={`/note/${note["_id"]}`} data={note} key={index}><Note key={index} note={note}/></StyledLink>
                    })}
                </NotesView>
            </ListView>
        );
    }
}

export default NotesList;
