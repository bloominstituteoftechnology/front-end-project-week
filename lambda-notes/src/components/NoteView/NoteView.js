// React and Router
import React from 'react';
import { Link } from "react-router-dom";

// Styling
import { Col } from 'reactstrap';
import './NoteView.css';

const NoteView = (props) => {
    console.log('props', props);
    return (
        <Col className='note-view'>
            <div className='note-actions col-1'>
                <Link to='/' style={{color: 'black'}}>edit</Link>
                <Link to='/' style={{color: 'black'}}>delete</Link>
            </div>
            <h5>{props.location.title}</h5>
            <p>{props.location.content}</p>
        </Col>
    )
} // end of NoteView

export default NoteView;