import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';
import NoteLink from './NoteLink';

class NavNotes extends Component {

    render() { 
        return (
            <Navbar className="nav-container" fixed="true">
                <Nav vertical="true" className="nav-section">
                    <h2 className="heading nav-heading">Lambda Notes</h2>
                    <div className="btn-container">                        
                    <NoteLink color="main" value="View Your Notes" link="/" />                       
                    <NoteLink color="main" value="+ Create New Note" link="/new" />
                    </div>
                </Nav>
            </Navbar>
        )
    }
}
 
export default NavNotes;