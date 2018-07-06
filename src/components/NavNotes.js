import React, { Component } from 'react';
import { Nav, Navbar } from 'reactstrap';
import NoteLink from './NoteLink';

class NavNotes extends Component {

    render() { 
        return (
            <Navbar className="nav-container" fixed="true">
                <Nav vertical="true" className="nav-section">
                    <h3 className="heading nav-heading">Lambda Notes</h3>
                    <div className="btn-container"> 
                    {this.props.history === "/"? (
                     <div className="btn-container">
                        <NoteLink color="main" value="Sign Up" link="/register" />                       
                        <NoteLink color="main" value="Sign In" link="/login" />
                    </div>
                ):(
                    <div className="btn-container">      
                    <NoteLink color="main" value="View Your Notes" link="/notes" />                       
                    <NoteLink color="main" value="+ Create New Note" link="/new" /> 
                </div>
                    )
                 }      
                </div>           
                </Nav>
            </Navbar>
        )
    }
}
 
export default NavNotes;