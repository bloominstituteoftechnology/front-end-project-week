import React from "react";
import {  Link } from "react-router-dom";
import '../App.css';

const EditNote = props => {
        return (
            <div className="Container add-form-wrap" >
                <h3 className="Header">Edit Note:</h3>
                <form className="add-form">
                   <input 
                    className="title-input" 
                    name="edittitle" 
                    onChange={props.handleInputChange} 
                    defaultValue={props.title} /> <br/>
                   <textarea 
                    className="text-input" 
                    name="editcontent" 
                    onChange={props.handleInputChange} 
                    defaultValue={props.content} />
                    <Link to={`/notes/${props.match.params.id}`}>
                         <button className="save-btn" onClick={() => props.editNoteSubmit(props.match.params.id)}>
                            Update
                        </button>
                    </Link>
               </form>
           </div>
       )  
   }

export default EditNote;