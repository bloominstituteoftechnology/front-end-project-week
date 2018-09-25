import React from "react";
import NotesList from '../components/NotesList/NotesList';
import './SingleNote.css';
import { connect } from 'react-redux';  
import { deleteNote, setUpdateNote, getNotes } from '../store/actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class SingleNote extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: {},
            modal: false
            
        };
    }

    componentDidMount() {
        let myId;
        if(this.props.noteId) {
            myId=this.props.noteId;
        } else {
            myId = this.props.match.params.noteId;
        }
        const foundNote = this.props.notesList.find(note => note.title === myId);
        if(!foundNote) return;
        this.setState({ note: foundNote});

        this.props.getNotes();
    }
    

    handleDeleteNote = title => {     
        this.props.deleteNote(this.state.note.title);
        console.log('Title: ', this.state.note.title);
        this.props.history.push('/notes');
    }

    goToUpdateNoteForm = (event,title) => {
        event.preventDefault();
        this.props.setUpdateNote(title);
        this.props.history.push('/notes-form');
    }

    handleClick = event => {
        event.preventDefault();
        this.setState({
            clicked: !this.state.clicked
        });
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    

    render() {
        console.log(this.props);
        const {title, textBody} = this.state.note
        console.log('note-key',this.state.note._id);
        return(
            
        <div className='active' >
           <div className='buttons'>
            <button onClick={this.toggle}>Delete</button>
            <Modal isOpen={this.state.modal} handleDeleteNote= {this.handleDeleteNote} toggle={this.toggle} className='delete-modal'>
                <ModalHeader handleDeleteNote={this.handleDeleteNote} toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Are You Sure?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleDeleteNote}>Confirm</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
            </Modal>
            <button onClick={event => {
                event.preventDefault();
                this.goToUpdateNoteForm(event, this.state.note.title)
            }}>Update</button>
            </div>
            <h2>{title}</h2>
            <p>{textBody}</p>
            
        </div>
        
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, { deleteNote, setUpdateNote, getNotes })(SingleNote);