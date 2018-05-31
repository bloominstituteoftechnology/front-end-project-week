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
        <div className = "note-container">
            <Sidebar/>
            <div className="single-note-wrapper">
                <div className="link-wrapper">
                    <Button 
                        className ="link-button"
                        >edit</Button>
                    <Button
                        className ="link-button"
                        onClick={this.toggle}
                        buttonLabel="delete"
                        >delete</Button>

                </div>    
                <div>
                    <h4 className="text-title">
                            I'm a title placeholder
                        </h4>
                        <hr />
                    <p className = "text-body">I'm a paragraph placeholder.
                    
                    Lorem ipsum blah blah blah. Lorem ipsum blah blah blah. Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.Lorem ipsum blah blah blah.adfahpodifhapodifh;dfnadkljnfakldnfvdjknaf;fjandjvmdv .zdjvnaluvha;odfnjvk .mzczv .cm,x vznxcjkvnbuparbgja;kvdf v jfo ahgfapod;fndsmav afh aeghj 
                    </p>
                    <p>adgadfgafdg.</p>
                </div>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader >Are You Sure You Want To Delete This Note?</ModalHeader>
                        <ModalFooter>
                            <Button className="delete-button" onClick={this.toggle}>Delete</Button>
                            <Button className="no-button" onClick={this.toggle}>No</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div>
    );
  }
}

        


export default SingleNoteView;

