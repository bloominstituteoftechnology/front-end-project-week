import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';
import NoteButton from './NoteButton';

class NavNotes extends Component {

    render() { 
        return (
            <Navbar className="nav-container" fixed="true">
                <Nav vertical="true" className="nav-section">
                    <h2 className="heading nav-heading">Lambda Notes</h2>
                    <div className="btn-container">
                        <NoteButton color="main" value="View Your Notes" link="/"/>
                        <NoteButton color="main" value="+ Create New Note" link="/new"/>
                    </div>
                </Nav>
            </Navbar>
        )
    }
}
 
export default NavNotes;