import React, { Component } from 'react';
import Note from './Note.js';
import styled from 'styled-components';

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

class NotesList extends Component   {
    // constructor(props)  {
    //     super(props)
    // }

    render()    {
        return(
            <ListView>
                <ViewTitle>
                    Your Notes:
                </ViewTitle>
                <NotesView>
                    {this.props.notes.map(note  =>  {
                        return <Note note={note}/>
                    })}
                </NotesView>
            </ListView>
        );
    }
}

export default NotesList;
