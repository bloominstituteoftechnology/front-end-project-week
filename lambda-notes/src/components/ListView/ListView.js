import React from 'react';
import { Link } from 'react-router-dom';

import Note from '../Note/Note';

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
            </div>
        </Col>
    )
};

export default ListView;