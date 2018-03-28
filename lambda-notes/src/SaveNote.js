import React from 'react';
import Buttons  from './Buttons';
import './SaveNote.css';
import './Buttons.css';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class SaveNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
      return (
        <div>
          <div>        
            <div className="row no-gutters">
                <div className="sideBar col-2">
                    <span className="lambdaNotes">Lambda <br /> Notes</span>
                    <span className="buttons"><Buttons /></span>
                </div>
                    <div className="noteSection col-md-10">
                        <div className="edit">
                            <Link to="/Edit" className="spanEdit">Edit</Link>
                                <span className="spanDelete" onClick={this.toggle}>Delete{this.props.buttonLabel}</span>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>          
                                        <ModalBody>
                                            <span className="ModalBody">Are you sure you want to delete this?</span>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button className="BTN ModalFooter ModalDelete" onClick={this.toggle}>Delete</Button>{' '}
                                                <Button className="BTN ModalFooter" onClick={this.toggle}>No</Button>
                                            </ModalFooter>
                                    </Modal>
                        </div>
                            <span className="yourNotes">Note Name</span>
                            <div className="row">
            <div className="noteName col-md-8">
                  <p> Gluten-free portland ramps listicle cloud bread copper mug synth PBR&B plaid.
                      Gluten-free portland ramps listicle cloud bread copper mug synth PBR&B plaid.
                      Pickled neutra edison bulb, food truck copper mug single-origin coffee 3 wolf 
                      moon celiac. Cloud bread yuccie thundercats, four loko keytar master cleanse 
                      humblebrag live-edge iPhone trust fund whatever cardigan. Shoreditch disrupt ramps 
                      slow-carb locavore readymade godard craft beer heirloom. Lumbersexual mustache synth 
                      readymade, seitan jean shorts adaptogen plaid sriracha bespoke hot chicken lo-fi. 
                      Kickstarter hot chicken letterpress pinterest, pug cold-pressed blog chicharrones biodiesel.
                      Gluten-free portland ramps listicle cloud bread copper mug synth PBR&B plaid.
                      Gluten-free portland ramps listicle cloud bread copper mug synth PBR&B plaid.
                      Pickled neutra edison bulb, food truck copper mug single-origin coffee 3 wolf 
                      moon celiac. Cloud bread yuccie thundercats, four loko keytar master cleanse 
                      humblebrag live-edge iPhone trust fund whatever cardigan. Shoreditch disrupt ramps 
                      slow-carb locavore readymade godard craft beer heirloom. Lumbersexual mustache synth 
                      readymade, seitan jean shorts adaptogen plaid sriracha bespoke hot chicken lo-fi. 
                      Kickstarter hot chicken letterpress pinterest, pug cold-pressed blog chicharrones biodiesel. 
                  </p>
                </div>
                
                            
        </div>
                    </div>  
                </div>
            </div>               
        </div>
      );
    }
  }
  
  export default SaveNote;