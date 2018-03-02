import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import Createnote from './NoteComponent/Createnote';
import NoteView from './NoteComponent/NoteView';
import Sidebar from './NoteComponent/Sidebar';
import EditView from './NoteComponent/EditView';
import ViewSingleNote from './NoteComponent/ViewSingleNote';

ReactDOM.render(
    <Router>
    <div className="container">
        <Sidebar />
        <Route path='/' component={NoteView} exact />
        <Route path='/Createnote' component={Createnote}/>
        <Route path='/EditView' component={EditView} exact />
        <Route path='/ViewSingleNote' component={ViewSingleNote}/>
    </div>
    </Router>,
     document.getElementById('root'));

