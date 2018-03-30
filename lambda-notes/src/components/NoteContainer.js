import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css'
import "./NoteContainer.css"

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        const {id} = this.props.match.params
        const {title, description} = this.props.note
        console.log(title, description);
        return (

            
        <div className="NoteContainer">

            <div className="NavArea">

              
                 <Link className="EditLink" to={`/EditNote/${id}`}><Button className="EditBtn">edit</Button></Link>   
                
                
                    <div className="DeleteMod">

                 <Link to={`/notes/${id}`} onClick={this.toggle}><Button className="DeleteBtn">delete</Button></Link>

            

                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="delete" centered>

                        <ModalBody>
                            Are you surre you want to delete this?
                        </ModalBody>

                        <ModalFooter>
                            <Link className="redirect" to={`/viewnotes`}><Button>Delete</Button></Link>{' '}
                            <Button color="secondary" onClick={this.toggle}>No</Button>
                         </ModalFooter>

                    </Modal>

                    </div>    
            </div>
                
                
                <div className="NoteView">  
                    <header className="NoteContainerTitle"> {title} </header> 
                    <p className="Description"> {description} </p> 
                  
                </div>

            
                
        </div>
        )
    }
}

export default NoteContainer;
