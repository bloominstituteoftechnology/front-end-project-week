import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Note from './Note';
import {Link} from 'react-router-dom';

const ListNotes = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`



const URL = 'https://raw.githubusercontent.com/DasGMA/front-end-project-week/master/lambda-notes/src/components/notes.json';

class NotesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount () {
        axios.get(URL)
        .then(response => {
            this.setState({
                notes: response.data
            })
        })
    }

    render() {
        return (
            <ListNotes>
                {this.state.notes.map(note => 
                    <Link to={`/note/${note.id}`}>
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                    </Link>
                )}
            </ListNotes>
        );

    }
}


export default NotesList;