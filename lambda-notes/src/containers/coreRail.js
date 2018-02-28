import React from 'react';
import NoteList from '../components/noteList';
import NewNote from '../components/newNote';
import NoteView from '../components/noteView';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const CoreRail = (props) => {
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
            <Route render={(routeProps) => (
                    <NoteList {...routeProps} {...props} />
                )} path="/" exact/>
            <Route render={(routeProps) => (
                    <NewNote {...routeProps} {...props} />
                )} path="/new"/>
            <Route render={(routeProps) => (
                    <NoteView {...routeProps} {...props} />
                )} path="/note/:id" />
          </div>
        </Router>
      </div>
    )
}

export default CoreRail;