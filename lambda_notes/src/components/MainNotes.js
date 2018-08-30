import React, { Component } from 'react';
import NotesList from './NotesList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';
import { Route, Switch } from 'react-router-dom';
import './index.css';

export default class MainNotes extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className='notesContainer'>
                <Switch>
                    <Route exact path='/' component={NotesList} />
                    <Route exact path='/note/:id' component={NoteView} />
                    <Route exact path='/create' component={CreateNote} />
                    <Route exact path='/edit/:id' component={EditNote} />
                </Switch>
            </div>
        );
    }
}