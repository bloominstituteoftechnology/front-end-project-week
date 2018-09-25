import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

class NotesList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         notes: [],
    //     }
    // }

    componentDidMount() {
        // axios
        // .get('https://killer-notes.herokuapp.com/note/get/all')
        // .then(response => {
        //     this.setState(() => ({ notes: response.data }));
        //     console.log(response.data);
        // })
        // .catch(error => {
        // console.error('Server Error', error);
        // });
        this.props.getNotes();
    }

    
    render() {
        return (
            <div className='notes-list'>
                <h1>
                    My Notes:
                </h1>
                {this.props.notes.map(note => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { notesReducer } = state;
    return {
        notes: state.notes,
        getNotes: notesReducer.getNotes,
    };
}

export default NotesList;