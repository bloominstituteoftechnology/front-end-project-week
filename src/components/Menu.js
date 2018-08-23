import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../actions';
import '../styles/Menu.css';

const URL = 'https://m4rkl3y-notes.herokuapp.com/api/notes/';

const Menu = props => {
    return (
        <div className='menu'>
            <h1>Lambda <br></br> Notes</h1>
            <Link className='link' to='/' onClick={() => props.fetchNotes(URL)} >
                <p className='link-btn'>View Your Notes</p>
            </Link>
            <Link className='link' to='/create-note'>
                <p className='link-btn'>+ Create New Note</p>
            </Link>
        </div>
    )
}

export default connect(null, { fetchNotes })(Menu);