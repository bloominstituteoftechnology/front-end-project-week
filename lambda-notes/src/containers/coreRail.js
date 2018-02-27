import React from 'react';
import NoteList from '../components/noteList';
import NewNote from '../components/newNote';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const CoreRail = () => {
    return (
        <div className="core-rail">
        <Router>
                    <div>
                        <div className="left-top-btn">
                            <NavLink className="navButton-top" to="/">View Your Notes</NavLink>
                        </div>
                        <div className="left-bottom-btn">
                            <NavLink className="navButton-bottom" to="/new">+ Create New Note </NavLink>
                        </div>
                        <Route path="/" component={NoteList} exact/>
                        <Route path="/new" component={NewNote} />
                    </div>
                </Router>
        </div>
    )
}

export default CoreRail;