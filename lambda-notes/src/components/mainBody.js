import React, { Component } from 'react';
import NoteCards from './NoteCards';
// import { Row, Col } from 'reactstrap';
import { Router, Route } from 'react-router-dom';


export default class MainBody extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route exact path="/" component={NoteCards} />
                
            </div>
            </Router>
        )
    }
}