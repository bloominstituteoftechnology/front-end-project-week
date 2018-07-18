import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingSingleNote, deleteNoteAction} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EachNoteBody extends React.Component {

constructor(props){
        super(props);
        this.state= {
		modal: false
        };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }




componentDidMount() {
        const id = this.props.match.params.id;
	this.props.fetchingSingleNote(id);
}

deleteNote = event => {
	const id = this.props.match.params.id;
	this.toggle();
	this.props.deleteNoteAction(id);
	this.props.fetchingSingleNote();
};


render() {
	return(
 		<div className="view-list-body desktop-view tablet-view">
                <LambdaLeftDiv />
		<div className="note-card-container">
		<div>{this.props.deleted ? (<h3 className="delete-note-message">Note successfully deleted</h3>) :(<Button className="delete-btn"  onClick={this.toggle}>delete</Button>)}</div>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-style">
          <ModalHeader toggle={this.toggle}>Are You Sure You Want To Delete This</ModalHeader>
         <ModalFooter> 
            <Button className="delete-modal-btn" onClick={this.deleteNote}>Delete</Button>
            <Button className="cancel-modal-btn" onClick={this.toggle}>No</Button>
	</ModalFooter>
        </Modal>



		
		<h3 className="single-note-title">{this.props.single.title}</h3>
		<div className="single-note-container">{this.props.single.textBody}</div>
		</div>
		</div>
	);		
}
}


const mapStateToProps = state => {
  return {
          notes: state.notes,
	  single: state.singleNote,
          deleted: state.noteDeleted,
  };
};


export default connect(mapStateToProps, {fetchingSingleNote, deleteNoteAction})(EachNoteBody);
