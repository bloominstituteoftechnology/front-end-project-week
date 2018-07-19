import React from 'react';
import './index.css'
import Note from '../Note/Note';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


const ListView = (props) => {
    console.log(props)
    return (
        <div className='main-container'>
            <div className='noteList-container'>
                <div className="note-header"><h2>Your Notes:</h2></div>
                <div className="noteList">
     :
                    {props.notes.map(note => <Link to={`/note/${note.id}`}><Note  style={{ textDecoration : "none" }} tittle = {note.title} body={note.body} key={note.id} /></Link>)}
                </div>
            </div>
        </div>
    );
};

const mapStateToprops = state => ({
  notes : state
})

export default connect(mapStateToprops,null)(ListView);