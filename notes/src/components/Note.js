import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import NewNote from './NewNote';
import NoteButton from './NoteButton';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            title: '',
            content: '',
            edit: false,           
            modal: false
        }
    }

    componentDidMount() {
         const id = this.props.match.params.id;
        this.fetchNote(id);
    }    

    fetchNote = (id) => {
        console.log(this.props);
       this.props.state.notes.map((note) => {
        if(id === note.id) {
         this.setState({
            note: note,
            title: note.title, 
            content: note.content
         })
           }           
            
        })
    }

    editNote = () => {
        this.setState({edit: true})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {} 

    render() { 
        return ( 

                this.state.edit ? (
                    <NewNote 
                        edit={true} 
                        note={this.state.note} 
                        title={this.state.title}
                        content={this.state.content}/>
                ) : (
                    <Container>
                        <div className="edit-delete">
                            <a onClick={this.editNote}>edit</a>
                            <a onClick={this.toggleModal}>delete</a>
                            <Modal isOpen={this.state.modal}
                                toggle={this.toggleModal}
                                size="lg"
                                className="delete-modal">
                                <ModalBody>
                                    <p className="confirm">Are you sure you want to delete this?</p>
                                    <div className="btn-container">
                                        <div 
                                            onClick={this.deleteNote} 
                                            className="btn-holder">
                                            <NoteButton color="danger" value="Delete"/>
                                        </div>
                                        <div 
                                            onClick={this.toggleModal} 
                                            className="btn-holder">
                                            <NoteButton color="main" value="No"/>
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>                            
                        </div>
                         {this.props.state.notes.map((note) => {
                             console.log(note);
                            if(this.props.match.params.id === note.id.toString()) {                           
                           return (  <div key={note.id}>
                                <h3 className="heading">{note.title}</h3>
                                <Row>
                                    <Col sm="12">
                                        <div  className="note-content">
                                            {note.content}
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                           )
                            }           
                            })}
                           
                    </Container>
                )
            )
    
    }
}
 
 export default Note;

// import React, { Component } from 'react';
// import { Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
// import NewNote from './NewNote';
// import NoteButton from './NoteButton';

// class Note extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             note: null,
//             title: '',
//             content: '',
//             edit: false,
//             deleted: false,
//             modal: false
//         }
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id;
//         this.fetchNote(id);
//     }    

//     fetchNote = (id) => {}

//     editNote = () => {
//         this.setState({edit: true})
//     }

//     toggleModal = () => {
//         this.setState({modal: !this.state.modal});
//     }

//     deleteNote = () => {} 

//     render() { 
//         return (
//             this.state.deleted ? (
//                 <Redirect to="/"/>
//             ) : (
//                 this.state.edit ? (
//                     <NewNote 
//                         edit={true} 
//                         note={this.state.note} 
//                         title={this.state.title}
//                         content={this.state.content}/>
//                 ) : (
//                     <Container>
//                         <div className="edit-delete">
//                             <a onClick={this.editNote}>edit</a>
//                             <a onClick={this.toggleModal}>delete</a>
//                             <Modal isOpen={this.state.modal}
//                                 toggle={this.toggleModal}
//                                 size="lg"
//                                 className="delete-modal">
//                                 <ModalBody>
//                                     <p className="confirm">Are you sure you want to delete this?</p>
//                                     <div className="btn-container">
//                                         <div 
//                                             onClick={this.deleteNote} 
//                                             className="btn-holder">
//                                             <NoteButton color="danger" value="Delete"/>
//                                         </div>
//                                         <div 
//                                             onClick={this.toggleModal} 
//                                             className="btn-holder">
//                                             <NoteButton color="main" value="No"/>
//                                         </div>
//                                     </div>
//                                 </ModalBody>
//                             </Modal>
//                         </div>
//                         <h3 className="heading">{this.state.title}</h3>
//                         <Row>
//                             <Col sm="12">
//                                 <div  className="note-content">
//                                     {this.state.content}
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 )
//             )
//         )
//     }
// }
 
// export default Note;