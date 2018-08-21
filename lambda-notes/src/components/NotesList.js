import React, {Component} from 'react';
import styled from 'styled-components';
import Note from './Note';

const ListNotes = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`

class NotesList extends Component {

    render() {
        return (
            <ListNotes>
                {this.props.notes.map(note => {
                    return (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        content={note.content}
                    />
                    )
                })}
            </ListNotes>
        );
    }
}

Note.defaultProps = {
    notes: []
}

export default NotesList;