import React from 'react';
import '../App.css';
import axios from 'axios';
import Modal from 'react-modal';


Modal.setAppElement(Note)

class Note extends React.Component {
    constructor(props){
        super(props)
        this.state={
            note: {},
            modalIsOpen: false,
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id);       
    }

    fetchNote = id => {
        axios
            .get(`http://localhost:5050/api/notes/${id}`)
            .then(response => {
                this.setState({note: response.data[0]})
            })
            .catch(err => {
                console.log("IN CATCH", err);
            })
    }

    openModal() {
        this.setState({modalIsOpen: true})
    }

    closeModal() {
        this.setState({modalIsOpen: false})
    }
    
    
    render(){
        return(
            <div className='note-page'>
                <div className='note-header'>
                    <h2>{this.state.note.title}</h2>
                    <div>
                        <span>edit</span>
                        <span onClick={this.openModal}>delete</span>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={this.closeModal}
                        >
                            <h2>Are you sure you want to delete this note?</h2>
                            <button>Yes</button>
                            <button>No</button>                    
                        </Modal>
                    </div>
                </div>
                <div>{this.state.note.note}</div>
                
            </div>
        )
    }
}

export default Note;