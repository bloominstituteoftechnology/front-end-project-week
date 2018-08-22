import React, {Component} from 'react';
import styled from 'styled-components';
import Note from './Note';
import Search from './Search';

const ListNotes = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: left;
`

const ListView = styled.div`
    width: 100%;
    background: #DCDCDC;
    padding: 20px;

    > h1 {
        font-weight: bold;
        font-size: 2.4rem;
    }

`

class NotesList extends Component {

    render() {
        return (
            <ListView>
                <Search {...this.props}/>
                    <h1>Your notes: </h1>
                <ListNotes>
                    { this.props.notes.map(note => { 
                        return (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                            />
                        )
                    }) }
                </ListNotes>
            </ListView>
        );
    }
}

export default NotesList;