import React, { Component } from 'react';
import NoteCards from './NoteCards';
// import { Row, Col } from 'reactstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NewNote from './NewNote';


export default class MainBody extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Route exact path="/" component={NoteCards} />
                    <Route exact path="/newnote" component={NewNote} />
                </div>
            </Router>
        )
    }
}