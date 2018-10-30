import React from 'react';
import {deleteNote, fetchSingleNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Button, Modal, ModalBody } from 'reactstrap';
import Markdown from 'react-markdown';

class NoteDetails extends React.Component {

    componentDidMount(){
        const noteID = this.props.match.params.id;
        this.props.fetchSingleNote(noteID);
        }

    constructor(props){
        super(props);

        this.state = {
            modal: false,
            deleted: false,
        }

        this.toggle = this.toggle.bind(this);
    
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

    handleDelete = event => {
        event.preventDefault();
        this.props.deleteNote(this.props.currentNote.id);
        
        this.toggle();

        this.deleted();

        setTimeout(() => this.props.history.push('/'), 1500);
            
        }
    
    render(){
        let tags;
        if(this.props.singleFetched){
            let tagsArray = this.props.currentNote.tags.split(/\s*,\s*/);
            tags = (
                        <p>{tagsArray.map(tag => {
                            return <Link to = {`/notes/tags/${tag}`} key={tag}><span className = 'tag-span'>{tag}</span></Link>
                        })}</p>
                    )
        }
        
    return (

        <div className = 'note-details'>
            <div className = 'edit-delete'>
            <Link to = {`/notes/edit/${this.props.currentNote.id}`}><span >edit</span></Link>
            <span onClick={this.toggle}>delete</span>
            </div>

            <div className = 'note-details-title'>
            <Markdown escapeHtml={true} source={this.props.currentNote.title}/>
            </div>
            <div className = 'note-details-content'>
            <Markdown escapeHtml={true} source={this.props.currentNote.content} />
            </div>
            <div className = 'note-details-tags'>
            {tags}
            </div>
            
                
           
            

           
            <Modal isOpen={this.state.modal} toggle={this.toggle} className='popup-modal'>
            <ModalBody>
                Are you sure you want to delete this?
                <div className = 'modal-buttons'>
                
                <Button color='danger' onClick={this.handleDelete}>Delete</Button>
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
      currentNote : state.currentNote,
      singleFetched: state.singleFetched
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    deleteNote,
    fetchSingleNote
  })(NoteDetails));
  