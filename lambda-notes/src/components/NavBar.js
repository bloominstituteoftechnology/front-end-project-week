import React from 'react';
import './NavBar.css';
import { Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const NavBar = () => {
    return (
        <div>
            <div>
                <h2>Lambda Notes</h2>
                <Link to='/'>
                    <Button>View Your Notes</Button>
                </Link>
                <br />
                <Link to='note-form'>
                    <Button>+Create New Note</Button>
                </Link>
            </div>
        </div>
    )
}


export default NavBar;