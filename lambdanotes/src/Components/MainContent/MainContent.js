import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';
import NotesView from '../NotesView/NotesView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import {Route, Switch} from 'react-router-dom';


class MainContent extends React.Component {
    render() {
        return (
         <div className='main-container'>
            <Switch>
                 <Route path='/' exact component={NotesList} />
                 <Route path='/note/:id' exact component={NotesView} />
                 <Route path='/create' exact component={CreateNote} />
                 <Route path='/edit/:id' exact component={EditNote} />
            </Switch>
         </div>
        );
    }
}

export default MainContent;