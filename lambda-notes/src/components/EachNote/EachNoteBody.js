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
	this.props.deleteNoteAction(id);

};


render() {
	return(
 		<div className="view-list-body">
                <LambdaLeftDiv />
		<div className="note-card-container">
		<div>{this.props.deleted ? (<h1>Note Deleted..</h1>) :(null)}</div>

        <Button className="delete-btn"  onClick={this.toggle}>delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
