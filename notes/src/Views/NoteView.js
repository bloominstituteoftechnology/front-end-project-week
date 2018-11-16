import React from "react"
import axios from "axios"

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
   render(){
      console.log(this.state.note)
      return(
         <>
            <div>
               <span>edit</span>
               <span>delete</span>
            </div>
            <h2>{this.state.note.title}</h2>
            <p>{this.state.note.textBody}</p>
         </>
      )
   }
}

export default NoteView