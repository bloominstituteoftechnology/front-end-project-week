import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu';
import NotesList from './NotesList';
import NewNote from './NewNote';
import ViewNote from './ViewNote';
import DeleteNote from './DeleteNote';
import EditNote from './EditNote';
import '../styles/App.css';

// handles component routing
const App = () => {
    return (
        <Router>
            <div className='App'>
                <Route path='/' component ={Menu} />
                <Route exact path='/' component={NotesList} />
                <Route path='/create-note' component={NewNote} />
                <Route path='/notes/:id' component={ViewNote} />
                <Route path='/notes/:id/delete' component={DeleteNote} />
                <Route path='/edit/:id' component={EditNote} />
            </div>
        </Router>
    );
  
}

export default App;
