import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import Createnote from './NoteComponent/Createnote';
import NoteView from './NoteComponent/NoteView';
import Sidebar from './NoteComponent/Sidebar';


ReactDOM.render(
    <Router>
    <div className="container">
        <Sidebar />
        <Route path='/NoteView' component={NoteView} exact />
        <Route path='/Createnote' component={Createnote}/>

    </div>
    </Router>,
     document.getElementById('root'));

