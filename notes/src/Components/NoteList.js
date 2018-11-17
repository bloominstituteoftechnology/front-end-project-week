//pass notes via state and display all
//view notes button routes here
//create styled components doc for buttons and form input boxes
import React from "react";
import axios from "axios"
import Note from "./Note";
import { NoteListContainer } from "../Styles/Styles";

class NoteList extends React.Component {
   constructor(){
      super()
      this.state = {
        notes: []
      }
    }

    componentDidMount() {
      axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(response => {
          this.setState({notes: response.data})
        })
        .catch(err => {
          console.log(err)
        })
    }

   render() {
      return(
         <>
            <h2>Your Notes:</h2>
            <NoteListContainer>
               {this.state.notes.length < 1 ? <h3>There are no notes!</h3> : this.state.notes.map(note => 
                  <Note 
                     key={note._id}
                     note={note}
                  />)
               }
            </NoteListContainer>
         </>
      )
   }
}

export default NoteList