
import React from 'react';
// import { Button, Form, Input, Row, Container, Col } from 'reactstrap';
//  import './EditNote.css';
 const EditNote = props => {
    return (
        <div className="edit-note">
            <h2>Edit Note:</h2>
            <form>
            <input onChange={props.handleInputChange} type="text" name="title" placeholder="Title" value={props.title}/>
            <input onChange={props.handleInputChange} type="text" name="text" placeholder="Note"  value={props.text}/>
            <button onClick={props.editNote}  onMouseUp={() => props.history.goBack()} block>Edit</button>
            </form>
        </div>
    );
}
 export default EditNote;