import React, {Component} from 'react';
import Note from './Note';
import dummyData from '../dummyData'

//initial state set up:
// {
//   "tags": ["tag", "otherTag"],
//   "title": "Note Title",
//   "textBody": "Note Body",
// }


 class NotesList extends Component {
     constructor(props){
         super(props);
         this.state = {
            notes: [
                {
                    id: 1,
                    tags: [],
                    title: 'Note Title',
                    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
                },
                {
                    id: 2,
                    tags: [],
                    title: 'Note Title',
                    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
                },
                {
                    id: 3,
                    tags: [],
                    title: 'Note Title',
                    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
                },
                {
                    id: 4,
                    tags: [],
                    title: 'Note Title',
                    textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            
                },    
            ]

         }
     }
        render() {
        return (
        <div className = "all-notes">
            <div className = "your-notes">
                <h2>
                Your Notes:
                </h2>
            </div>
            <div className = "note-container">
            {this.state.notes.map(note => {
                return(
                <div key = {note.id} className = "note">
                    <h3 className = "note-title"> 
                    {note.title}
                    </h3>
                    <p> 
                    {note.textBody}   
                    </p>
                </div>
                )
            }
            )}
            </div>
        </div>
        )
    }
 }

export default NotesList;