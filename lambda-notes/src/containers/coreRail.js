import React from 'react';
import NoteList from '../components/noteList';
import NewNote from '../components/newNote';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const CoreRail = () => {
    return (
        <div className="core-rail">
        <Router>
                    <div>
                        <div className="view-notes-btn">
                            <Link to="/" exact>View Your Notes</Link>
                        </div>
                        <div className="create-note-btn">
                            <Link to="/new">+ Create New Note </Link>
                        </div>
                        <Route path="/" component={NoteList} exact/>
                        <Route path="/new" component={NewNote}/>
                    </div>
                </Router>
        </div>
    )
}

export default CoreRail;