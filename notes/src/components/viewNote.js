import React,  { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './viewNote.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewNote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal : false
    };

    this.toggle = this.toggle.bind(this);

}



      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      };
    
  
    render() {
      return (
      <body>  
        <div className="container">
            <div className="sideBar">
                <div className="sideBarTitle">
                    <h1 className="sideBarTitle1">Lambda</h1>
                    <h1 className="sideBarTitle2">Notes</h1>
                </div>
                <Link to="/">
                <button type="button" className="viewNotesButton">
                View Your Notes
                </button>
                </Link>
                <Link to="/createNote">
                <button type="button" className="createNoteButton">
                + Create New Note
                </button>
                </Link>
           </div>
        
         <div className="mainBody">
            <Link to="/editNote">
            <button type="button" className="editButton">
            edit
            </button>
            </Link>
            
            <button className="deleteButton" onClick={this.toggle}>{this.props.buttonLabel}delete</button>
        
            <Modal className="modalBody" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader className="modalHeader" toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
            <ModalBody>
                
            </ModalBody>
            <ModalFooter>
                <Link to="/">
                <Button  className="modalDelete" onClick={this.toggle}>Delete</Button>{' '}
                </Link>
                <Button className="modalNo" onClick={this.toggle}>No</Button>
            </ModalFooter>
            </Modal>
            <h4 className="mainBodyTitle">Note Name</h4>
        </div>
        </div>
      </body>
 )} }    
  
 

export default ViewNote;



  
          