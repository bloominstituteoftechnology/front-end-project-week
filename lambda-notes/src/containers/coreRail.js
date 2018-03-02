import React from 'react';
import NoteList from '../components/noteList';
import NewNote from '../components/newNote';
import ViewNote from '../components/viewNote';
import EditNote from '../components/editNote';
import DeleteNote from '../components/deleteNote';
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
                    <ViewNote {...routeProps} {...props} />
                )} path="/note/:id/:title/:body" />
            <Route render={(routeProps) => (
                    <EditNote {...routeProps} {...props} />
                )} path="/edit/:id/:title/:body" />
            <Route render={(routeProps) => (
                    <DeleteNote {...routeProps} {...props} />
                )} path="/delete/:id/:title/:body" />
          </div>
        </Router>
      </div>
    )
}

export default CoreRail;