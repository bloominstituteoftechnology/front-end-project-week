// React and Router
import React from 'react';
import { Link } from "react-router-dom";

// Components
import DeleteNote from "../DeleteNote";

// Styling
import { Col } from 'reactstrap';
import './NoteView.css';

const NoteView = (props) => {
    console.log('props', props);
    return (
        <Col className='note-view'>
            <div className='note-actions col-1'>
                <Link to='/notes/:id/edit' style={{color: 'black'}}>edit</Link>
                <DeleteNote buttonLabel='Delete Note'/>
            </div>
            <h5>{props.location.title}</h5>
            <p>{props.location.content}</p>
        </Col>
    )
} // end of NoteView

export default NoteView;