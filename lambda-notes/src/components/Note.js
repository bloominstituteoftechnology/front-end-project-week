import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactModal from 'react-modal';
import Markdown from 'react-markdown';
import { NoteWrapper, NoteNav, ModalWrapper, ModalContent, ModalButtons, Buttons } from '../style';
import CheckList from './CheckList';




class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render () {
        const note = this.props.notes.find( note  => { return this.props.match.params.id === `${note._id}`})
            console.log(note)
        return (
            <NoteWrapper>
                <NoteNav>
                    <NavLink to={`/edit-note/${note._id}`} className='note-button'> Edit </NavLink>
                    <button  onClick={() => {this.toggleModal()}}  className='note-button'>Delete</button> 
                 </NoteNav>
                <h2>{note.title}</h2>
                <Markdown source={note.textBody}/>

                {/* <CheckList/> */}
                <div className='modal-wrapper'>
                <ReactModal className='ReactModal' isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <ModalWrapper onClick={this.handleCloseModal}>
                        <ModalContent>
                                Are you sure you want to delete this?
                            <ModalButtons>
                                <Buttons delete onClick={() => { this.props.delete(this.props.match.params.id); this.props.history.push('/')}}>
                                    Delete
                                </Buttons>
                                <Buttons onClick={() => {this.toggleModal()}} className='close'>No</Buttons>
                            </ModalButtons>
                        </ModalContent>
                    </ModalWrapper>
                </ReactModal>
                </div>
            </NoteWrapper>
        );        
     }
}



// const Note = props => {
//     const note = props.notes.find( note  => { return props.match.params.id === `${note._id}`})
//         console.log(note)
//     return (
//         <NoteWrapper>
//             <NoteNav>
//                 <NavLink to={`/edit-note/${note._id}`} className='edit'> Edit </NavLink>
//                 <NavLink to='' className='delete' onClick={() => { 
                  
//                                 props.delete(props.match.params.id)
//                                 props.history.push('/')
//                             }
//                                 }>X</NavLink>
//             </NoteNav>
//             <h2>{note.title}</h2>
//             <p>{note.textBody}</p>
//         </NoteWrapper>
//     );
// }

export default Note