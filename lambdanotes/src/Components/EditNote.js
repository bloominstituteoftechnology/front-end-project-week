import React from "react";
import {  Link } from "react-router-dom";
import '../App.css';
 
// class EditNote extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).title,
//             content: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).content,
//             id: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).id
//         }
//     }
    
//     handleInputChange = e => {
//        this.setState({ [e.target.name]: e.target.value });
//    };

//     render() {
//    let denoted = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id, 10));
   
//     console.log(this.state.id);
//     if(this.props.notes.length > 0) {

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
                    <Link className="save-btn" to={`/notes/${props.match.params.id}`}>
                         <button onClick={() => props.editNoteSubmit(props.match.params.id)}>
                            Update
                        </button>
                    </Link>
               </form>
           </div>
       )  
   }

export default EditNote;