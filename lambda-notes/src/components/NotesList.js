import React, {Component} from 'react';
import axios from 'axios';
import Note from './Note';


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
        .then(({data}) => {
            this.setState({
                notes: data
            })
        })
    }

    render() {
        return (
            <div className='notes-list'>
                {this.state.notes.map(note => 
                    <Note
                        key={note.id}
                        title={note.title}
                        content={note.content}
                    />
                )}
            </div>
        );

    }
}


export default NotesList;