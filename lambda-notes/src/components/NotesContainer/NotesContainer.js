import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Note from '../Note/Note';
import './NotesContainer.css';
import { fetchNotes, saveFilteredNotesForCSV } from '../../actions';


class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filteredCSV: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const authToken = `Bearer ${token}`;
        const requestOptions = {
            headers: {
                Authorization: authToken,
            }
        };
        this.props.fetchNotes(requestOptions);
    }
    
    render() {

        let loggedInUser = localStorage.getItem('userId'); 

        let notesForLoggedInUser = this.props.notes.filter(note => {
            return (note.user == loggedInUser)
        })       

        /*looping backwards and pushing into empty array to display 
            notes with most recent added/edited note on top of list-view */
        let notesArr = [];
        for (let i = notesForLoggedInUser.length -1; i >= 0; i--) {
            notesArr.push(notesForLoggedInUser[i])
        }

        console.log(notesArr)

        this.props.saveFilteredNotesForCSV(notesArr)

        return (
            
            <div id="sortable" className="notes-container">
                <div>
                    <input className="search-input" type="text" name="search" placeholder="search for a note.."></input>
                </div>
        
                <div className="your-notes">Your Notes:</div>

                {notesArr.map(note => <Note key={note._id} note={note}/>)}

            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {fetchNotes, saveFilteredNotesForCSV})(NotesContainer);




