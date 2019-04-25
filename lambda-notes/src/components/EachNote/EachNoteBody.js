import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchingSingleNote, deleteNoteAction} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import {FadeLoader} from 'react-spinners';
import { css } from 'react-emotion';


const fadeloader = css`
    display: block;
    margin: 5%  auto;
`;


const Image = styled.img`
        margin-top: 4%;
        margin-bottom: 1%;
	max-height: 300px;
`

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
	//this.props.fetchingSingleNote();
};

render() {
	return(
 		<div className="view-list-body desktop-view  tablet-view">
                <LambdaLeftDiv />
		<div className="note-card-container">
		<div>{this.props.deleted ? (<h3 className="delete-note-message">Note successfully deleted</h3>) :(			
			<div>
			{this.props.fetchingNotes ? (<FadeLoader  className={fadeloader}    color={'#36D7B7'}  size={200} />):(		      
			<div>
		
			<Button className="delete-btn"  onClick={this.toggle}>delete</Button>
			<Link to={`/editnote/${this.props.match.params.id}`}><Button className="delete-btn">edit</Button></Link>
			
        
		
	<Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-style">
          <ModalHeader toggle={this.toggle}>Are You Sure You Want To Delete This</ModalHeader>
         <ModalFooter> 
            <Button className="delete-modal-btn" onClick={this.deleteNote}>Delete</Button>
            <Button className="cancel-modal-btn" onClick={this.toggle}>No</Button>
	</ModalFooter>
        </Modal>
		<Image src={this.props.single.image} alt={this.props.single.title} />	
                <h3 className="single-note-title">{this.props.single.title}</h3>
                <div className="single-note-container">{this.props.single.content}</div>
		</div>
 )}</div>)}
		</div>
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
	  fetchingNotes: state.fetchingNotes
  };
};


export default connect(mapStateToProps, {fetchingSingleNote, deleteNoteAction})(EachNoteBody);
