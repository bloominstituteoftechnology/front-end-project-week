import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Note from './Note';

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
            notes: [],
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

    delete = (id) => {
        axios.delete(`${URL}${id}`)
        .then(response => {
            this.setState({
                notes: response.data
            })
        })
        .then(response => {
            console.log(response);
        })
    }

    render() {
        return (
            <ListNotes>
                {this.state.notes.map(note => 
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                )}
            </ListNotes>
        );

    }
}


export default NotesList;