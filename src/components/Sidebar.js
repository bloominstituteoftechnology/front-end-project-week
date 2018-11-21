import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'
import './NotesContainer'
class Sidebar extends Component {
    
    render() {
        return (
            <div className="Sidebar">         
            <h1>Lambda Notes</h1> 
            <div className="btn">View Your Notes</div>
            <div className="btn" >+ Create New Note</div>
            </div>
        );
    }
}

export default Sidebar;