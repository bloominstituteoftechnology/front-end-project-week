import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class SingleNoteView extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render(){
        return(
            <div className="single-note-container">
                <Sidebar />
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <Button className="link-button">edit</Button>
                        <Button className="link-button" onClick={this.toggle} toggle={this.state.modal}>delete</Button>
                        <div>
                            <div 
                                className={this.state.modal? "modal-content": "hidden"} 
                                onClick={this.toggle} toggle={this.state.modal}>
                                <h5 className="modal-header">Are you sure you want to delete this note?</h5>
                                    <div className="modal-footer">
                                        <button className="delete-button">Delete</button>
                                        <button className="no-button">No</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <h4 className="text-title">I'm a title placeholder</h4>
                        <p className = "text-body">I'm a paragraph placeholder. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.adfahpodifhapodifh;dfnadkljnfakldnfvdjknaf;fjandjvmdv .zdjvnaluvha;odfnjvk .mzczv .cm,x vznxcjkvnbuparbgja;kvdf v jfo ahgfapod;fndsmav afh aeghj </p>
                        <p>adgadfgafdg.</p>
                    </div>
                </div>
                
            </div>
        


    );
  }
}

        


export default SingleNoteView;

