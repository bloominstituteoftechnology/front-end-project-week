import React from 'react';
import { Nav, Navbar } from 'reactstrap';
import NoteButton from './NoteButton';
//import SearchBar from './SearchBar';
// import Search from 'react-search'

const NavNotes = () => {

    return (
        <Navbar className="nav-container" fixed="true" fluid="true">
            <Nav vertical="true" className="nav-section">
                <h2 className="heading nav-heading">Lambda<br/>Notes</h2>
                {/* <SearchBar /> */}
                {/* <Search items={}>
                </Search> */}
                <NoteButton 
                    color="main" 
                    value="View Your Notes" 
                    link="/"/>
                <NoteButton 
                    color="main" 
                    value="+ Create New Note" 
                    link="/new"/>
            </Nav>
        </Navbar>
    )
}
 
export default NavNotes;