
import axios from 'axios';
import './Form.css';
import React from 'react';


function Form(props) {
    const handleClick = ev => {
      ev.preventDefault();
      if (props.isEditing) {
        props.updateNote();
      } else {
        props.addNote();
      }
      props.history.push('/');
    };
   
        return (
            <div className="container">
                <div className="notes-header">
                    <h3>{props.isEditing ? 'Edit Note:' : 'Create New Note:'}</h3>
                </div>
                <div>
                <form >
                    <input
                        className="title"
                        name="title"
                        value={props.note.name}
                        size='80'
                        onChange={props.changeHandler}
                        type="text"
                        placeholder='Note Title'
                    />
                    <input
                        className="content"
                        name="textBody"
                        size='80'
                        value={props.note.textBody}
                        onChange={props.changeHandler}
                        type="text"
                        placeholder='Note Content'
                    />
                    <br/>
                    <button onClick={handleClick} className="button">
                        {props.isEditing ? 'Update' : 'Save'}</button>
                </form>
                </div>
            </div>
        );}
    




export default Form;
