import React from "react"
import axios from "axios"
import {Link} from "react-router-dom";

export class NoteView extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         note: []
      }
   }

   componentDidMount(){
      this.importNote(this.props.match.params.id)
   }

   componentWillReceiveProps(noteProps) {
      if(this.props.match.params.id !== noteProps.match.params.id){
         this.importNote(noteProps.match.params.id)
      }
   }

   importNote = id => {
      axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
         .then(response => {this.setState({note: response.data})})
         .catch(err => console.log(err))
   }

   render(){
      return(
         <>
            <div>
               <Link to={`/edit/${this.state.note._id}`} >
                  <span>edit</span>
               </Link>
               <Link to={`/note/${this.state.note._id}/delete`} >
                  <span>delete</span>
               </Link>
            </div>
            <div>
               <h2>{this.state.note.title}</h2>
               <p>{this.state.note.textBody}</p>
            </div>
         </>
      )
   }
}

export default NoteView;