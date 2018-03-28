import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { Col } from 'reactstrap';
import './NoteView.css';

class NoteView extends Component {
    render() {
        return (
            <Col className='note-view'>
                <div class='note-actions col-1'>
                    <Link to='/' style={{color: 'black'}}>edit</Link>
                    <Link to='/' style={{color: 'black'}}>delete</Link>
                </div>
                <h5>Godard plaid</h5>
                <p>Cardigan pitchfork kale chips, scenester roof party farm-to-table microdosing post-ironic affogato prism la croix chambray selfies whatever.</p>
            </Col>
        )
    }
}

export default NoteView;