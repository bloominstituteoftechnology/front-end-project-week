import React from 'react'; 
import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Delete from './Delete';


const NoteView = () => {
    return(
        <div className="ViewForm">
            <div className="ButtonContainer">
                <Link to={'/EditCard'}><h6 className="Edit"> Edit </h6></Link>
                <Delete/>
            </div>
            <h1 className="NoteView">Note View </h1>
        </div>
    )
}
export default NoteView;