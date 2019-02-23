import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import './App.css';

export class NoteView extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         noteData: []
      }
   }

   componentDidMount(){
      this.importNote(this.props.match.params.id)
      console.log(`id ${this.props.match.params.id}`)
   }

   componentWillReceiveProps(noteProps) {
      if(this.props.match.params.id !== noteProps.match.params.id){
         this.importNote(noteProps.match.params.id)
      }
   }

   importNote = id => {
      axios.get(`http://localhost:3333/notes/${id}`)
         .then(response => {
            console.log(response)
            this.setState({noteData: response.data[0]})
            console.log(`this is state ${this.state.noteData}`)
            })
         .catch(err => console.log(err))
   }

   
   render(){
      return(
         <div className="Completeview">     
            <div className="Topbar">
               <Link to={`/edit/${this.state.noteData.id}`} >
                  <span>edit</span>
               </Link>
               <Link to={`/note/${this.state.noteData.id}/delete`} >
                  <span>delete</span>
               </Link>
            </div>
            <div className="Noteview">
               <h2>{this.state.noteData.title}</h2>
               <p>{this.state.noteData.text}</p>
            </div>
         </div>
      )
   }
}

export default NoteView;