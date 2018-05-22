import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';

import NoteButton from './NoteButton';

class NavNotes extends Component {

    render() { 
        return (
            <Navbar className="nav-container" fixed="true">
                <Nav vertical="true" className="nav-section">
                    <h1 className="heading">Lambda Notes</h1>
                    <NoteButton color="main" value="View Your Notes" link="/"/>
                    <NoteButton color="main" value="+ Create New Note" link="/new"/>
                </Nav>
            </Navbar>
        )
    }
}
 
export default NavNotes;