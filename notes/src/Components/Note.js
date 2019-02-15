import React  from 'react';
import "./note.css"
import axios from "axios";
import{Route,Link} from "react-router-dom"


class Note extends React.Component{

     constructor(props) {
         super(props);
         console.log("props = ", props, "tmp = ", this.props.tmp);
         this.state = {
             // "tags": this.props.note.tags,
             // "title": this.props.note.title,
             // "textBody":this.props.note.textBody,
             "notes": this.props.notes,
             "noteId": this.props.match.params.noteId,
             "myNote": {
                 "title" : "Loading",
                 "textBody": "Loading"
             }
         }

         console.log("My note = ", this.state.noteId, this.props.match.params.noteId, this.state.notes);


     }


     editHandler=()=>{
         let note={
             "tags": this.props.note.tags,
             "title": this.props.note.title,
             "textBody":this.props.note.textBody
         }
         this.props.updateNote(this.state.noteId,note)
         //this.setState ({tags:[],title:"",textBody:""})

     }

     componentDidMount() {
         console.log("Notes - ", this.state.notes);
         if (this.state.notes.length != 0) {
             let myNote = this.state.notes.find(note => {
                     return note._id == this.state.noteId;
                 }
             )
             if (myNote != null) {
                 this.setState({myNote: myNote})
             }
         }
     }


    render(){

         return (
            <div className="note">


                    <div className="action">
                        <Link to ={`/EditForm/${this.state.noteId}`} >edit</Link>
                        <Link to  ={`/DeleteForm/${this.state.noteId}`} >delete</Link>

                        {/*<button onClick={this.editHandler}>Edit</button>*/}
                    </div>

                <h3>{this.state.myNote.title} </h3>

                <p> {this.state.myNote.textBody} </p>
            </div>
         )
     }
}
export default Note