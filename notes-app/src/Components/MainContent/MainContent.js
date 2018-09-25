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
import axios from 'axios';

class MainContent extends Component {
    state = {
        notes: [],
    }


    render() {
        return (
            <div className="main_container">
                <Switch>
                    <Route path='/' exact render={(props) => <NotesList state={this.state} />} />
                    <Route path='/note/:id' render={({match}) => <NoteView state={this.state} match={match} />} />
                    <Route path='/create' exact component={CreateNote} />
                    <Route path='/edit/:id' exact component={EditNote} />
                </Switch>
            </div>
        )
    }

    componentDidMount(){ 
        axios
            .get('http://localhost:5000/notes')
            .then(res => {
                this.setState({ notes: res.data });
            })
            .catch(err => {
                console.error('Axios Error Retrieving Data', err)
            });

    };

}

export default MainContent;