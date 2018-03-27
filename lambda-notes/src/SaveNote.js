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
          <div className="">        
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
            <span className="ModalBody">Are you sure you want to delete?</span>
          </ModalBody>
          <ModalFooter>
            <Button className="BTN ModalFooter" color="danger" onClick={this.toggle}>Delete</Button>{' '}
            <Button className="BTN ModalFooter" color="info" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
                </div>
            {/* <Link to="/">
            <button>Back Home</button>
              </Link> */}
            <span className="yourNotes">Note Name:</span>            
                {/* <form className="Form">
                  <input className="noteTitle" type="text" placeholder="Note Title" /><br />
                  <p><textarea className="noteContent" cols="60" rows="10" placeholder="Note Content"></textarea></p>
                  <Link to="/Save"><Button className="BTN btn btn-info" type="submit">Save</Button></Link>
              </form>   */}
            </div>  
        </div>
      </div>          
                
        </div>
      );
    }
  }
  
  export default SaveNote;