import React from 'react';
import {deleteNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';

class NoteDetails extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            deleted: false,
            currentNote: {}
        }

        this.toggle = this.toggle.bind(this);

         
    props.notes.map(note => {
        if(note._id === props.match.params.id){
            let currentNote = Object.assign({}, note);
            this.state = Object.assign({}, this.state, {
                currentNote: currentNote
            })
            
        }
        return null;
    })
    
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }
   

    deleted() {
        this.setState({
            deleted: !this.state.deleted
        })
    }

    handleDelete = event =>{
        event.preventDefault();
        this.props.deleteNote(this.state.currentNote._id);
        
        this.toggle();

        this.deleted();

        setTimeout(() => this.props.history.push('/'), 1500);
            
        }
    
    render(){

        
    return (
        <div className = 'note-details'>
            <div className = 'edit-delete'>
            <Link to = {`/notes/edit/${this.state.currentNote._id}`}><span >edit</span></Link>
            <span onClick={this.toggle}>delete</span>
            </div>

            <h1>{this.state.currentNote.title}</h1>
            <p>{this.state.currentNote.textBody}</p>

           
            <Modal isOpen={this.state.modal} toggle={this.toggle} className='delete-modal'>
            <ModalBody>
                Are you sure you want to delete this?
                <div className = 'modal-buttons'>
                
                <Link to = '/'><Button color='danger' onClick={this.handleDelete}>Delete</Button></Link>
                <Button color='info' onClick={this.toggle}>No</Button>
                </div>
            </ModalBody>
            </Modal>

            <Modal isOpen={this.state.deleted} toggle={this.deleted} className='deleted-modal'>
            <ModalBody>
                Note successfully deleted. Returning to notes view.
            </ModalBody>
            </Modal>

        </div>
    )
}
}


const mapStateToProps = state => {
    return {
      notes: state.notes
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    deleteNote
  })(NoteDetails));
  