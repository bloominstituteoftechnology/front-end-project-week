import React  from 'react';
import "./note.css"
import axios from "axios";
import{Route,Link} from "react-router-dom"
import Modal from 'react-modal';



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
             },
             deleteModelShown : false
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

    deleteButtonClicked = event => {
         this.setState({deleteModelShown:true})
    }
    noClicked = event => {
         this.setState({deleteModelShown:false})
    }
    yesClicked=()=>{
        this.props.deleteNote(this.state.noteId)
        this.setState({deleteModelShown:false})
    }
    render(){

         return (
            <div className="note">


                    <div >
                        <Link className="action1" to ={`/EditForm/${this.state.noteId}`} >edit</Link>
                        <button className="action2" onClick={this.deleteButtonClicked}>delete</button>

                        <Modal className = "modal" isOpen={this.state.deleteModelShown} contentLabel="Minimal Modal Example">


                            {/*<Link className="action2" to={`/DeleteForm/${this.state.noteId}`} >delete</Link>*/}
                           <div className="modalButtons">
                               <h3>Are you sure you want to delete this? </h3>

                            <div>
                            <button className="modalButtonsDeleteYes" onClick={this.yesClicked}>Delete</button>
                            <button className="modalButtonsDeleteNo" onClick={this.noClicked}>No</button>
                            </div>
                           </div>
                        </Modal>

                    </div>

                <h3>{this.state.myNote.title} </h3>

                <p> {this.state.myNote.textBody} </p>
            </div>
         )
     }
}
export default Note