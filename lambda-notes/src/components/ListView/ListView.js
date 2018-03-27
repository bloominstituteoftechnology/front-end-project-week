import React from 'react';
import { Route, Link } from 'react-router-dom';

import Note from '../Note/Note';
import { NoteView } from "../NoteView/NoteView";

import { Col } from "reactstrap";
import './ListView.css';

function ListView() {
    return (
        <Col className='list-view'
            style={{backgroundColor: '#f2f1f2'}}>
            <h5>Your notes:</h5>
            <div className='notes-container'>
                <Link to="/0">
                    <Note />
                </Link>
                <Link to="/1">
                    <Note />
                </Link>
                <Link to="/2">
                    <Note />
                </Link>
                <Link to="/3">
                    <Note />
                </Link>
                <Link to="/4">
                    <Note />
                </Link>
                <Link to="/5">
                    <Note />
                </Link>
                <Link to="/6">
                    <Note />
                </Link>
                <Link to="/7">
                    <Note />
                </Link>
                <Link to="/8">
                    <Note />
                </Link>
                <Route path='/0' component={NoteView} />
                <Route path='/1' component={NoteView} />
                <Route path='/2' component={NoteView} />
                <Route path='/3' component={NoteView} />
                <Route path='/4' component={NoteView} />
                <Route path='/5' component={NoteView} />
                <Route path='/6' component={NoteView} />
                <Route path='/7' component={NoteView} />
                <Route path='/8' component={NoteView} />
            </div>
        </Col>
    )
};

export default ListView;