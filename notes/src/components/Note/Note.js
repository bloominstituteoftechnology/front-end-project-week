import React from 'react';

import './note.css'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';


function Note(props) {
    
    const note = props.notesList.find(
        note => note._id === props.match.params.noteId);

        

    function handleDelete() {
        props.handleDeleteNote(note._id);
        props.history.push('/');
    }

    // function toggle(){
    //     console.log(toggle)
    //     props.toggle();
    // }

    // function view(){
    //     props.isOpen();
    // }

    if (props.isLoading || props.notesList.length === 0) return <h2>Loading Note... Please Wait...</h2>

console.log(props.toggle);
    return (
        
            <div className='noteBackground'>

                <div className='topRightButtons'>
                    <button className='handleButtons' onClick={ event => {
                         props.goToEditNoteForm(event, note._id)
                         }}>Edit</button>
     
                        <Button  onClick={props.toggle}>Delete</Button>
                    <div className='modalContainer'>
                        <Modal isOpen={props.view} toggle={props.toggle} className={props.view ? 'displayBlock':'displayNone'}>
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter className='modalFooter'>
                                <Button  onClick={handleDelete} className='deleteModalButton'>Delete</Button>{' '}
                                <Button  onClick={props.toggle} className='noModalButton'>No</Button>
                            </ModalFooter>
                        </Modal> 
                    </div>                   

                    {/* <button className='handleButtons' onClick={handleDelete}>Delete</button>    */}
                    

                </div>
                <div className='noteBody'>
                    <h1>{note.title}</h1>
                    <p>{note.textBody}</p>   
               
                </div>

            </div>
    );
}

export default Note;


                    // {this.state.view?                     
                    
                    // <div>
                    //     <Button  onClick={this.toggle}>delete</Button>

                    //     <Modal isOpen={this.state.view} toggle={this.toggle}>

                    //         <ModalBody>Are you sure you want to delete this?</ModalBody>

                    //         <ModalFooter>
                    //             <Button  onClick={handleDelete}>Delete</Button>{' '}
                    //             <Button  onClick={this.toggle}>No</Button>
                    //         </ModalFooter>

                    //     </Modal>
                    // </div> : null}