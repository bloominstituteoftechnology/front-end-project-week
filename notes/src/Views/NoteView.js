import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";

class NoteView extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         note: []
      }
   }

   componentDidMount(){
      this.retrieveNote(this.props.match.params.id)
   }

   componentWillReceiveProps(noteProps) {
      if(this.props.match.params.id !== noteProps.match.params.id){
         this.retrieveNote(noteProps.match.params.id)
      }
   }

   retrieveNote = id => {
      axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
         .then(response => {this.setState({note: response.data})})
         .catch(err => console.log(err))
   }

   deleteNote = id => {
      axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(response => {this.setState({note: []})})
         .catch(err => console.log(err))
   }

   render(){
      return(
         <>
            <div>
               <Link to={`/edit/${this.state.note._id}`} >
                  <span>edit</span>
               </Link>
                  <span onClick={()=> this.deleteNote(this.state.note._id)}>delete</span>
            </div>
            <div>
               <h2>{this.state.note.title}</h2>
               <p>{this.state.note.textBody}</p>
            </div>
         </>
      )
   }
}

export default NoteView