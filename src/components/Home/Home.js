import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import NotesContainer from '../NotesContainer/NotesContainer';
import CreateNote from '../CreateNote/CreateNote';
import Note from '../Note/Note';
import EditNote from '../EditNote/EditNote';
import { Route } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='homeContainer'>
                <Navigation />
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Route exact path='/:userId' component={NotesContainer} /> : <Route exact path='/' component={About} />}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? null : <Route exact path='/signup' component={Signup} />}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? null : <Route exact path='/login' component={Login} />}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Route exact path='/:userId/createnote' component={CreateNote} /> : null}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Route exact path='/:userId/notes/:noteId' component={Note} /> : null}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') ? <Route exact path='/:userId/notes/:noteId/editnote' component={EditNote} /> : null}
                {localStorage.getItem('jwt') && localStorage.getItem('userId') && window.location.pathname === '/' ? <Redirect to={`/${localStorage.getItem('userId')}`} /> : null}
            </div>
        )
    }
}; 

export default withRouter(Home); 