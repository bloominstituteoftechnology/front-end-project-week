import React, { Component } from 'react';
import './index.css';

import NotesList from '../NotesList/NotesList';
// import Notes from '../../Components/Notes';

import NoteView from '../NoteView/NoteView';
// import NoteView from '../NoteView';


import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
// import DeleteNote from '../DeleteNote/DeleteNote';
import {Route, Switch} from 'react-router-dom';

class MainContent extends Component {
    render() {
        return (
            <div className="main_container">
                <Switch>
                    <Route path='/' exact component={NotesList} />
                    <Route path='/note/:id' exact component={NoteView} />
                    <Route path='/create' exact component={CreateNote} />
                    <Route path='/edit/:id' exact component={EditNote} />
                </Switch>
            </div>
        )
    }
}

export default MainContent;