import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route, Switch } from 'react-router-dom';

class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                <Switch>
                    <Route path='/' exact component={NotesList} />
                    <Route path='/note/:id' exact component={NoteView} />
                    <Route path='/create' exact component={CreateNote} />
                    <Route path='/edit/:id' exact component={EditNote} />
                </Switch>
            </div>
        );
    }
}

export default MainContent;