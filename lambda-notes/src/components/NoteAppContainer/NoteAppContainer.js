import React from 'react'
import axios from 'axios'
import NoteListContainer from '../NoteListContainer/NoteListContainer'
import NoteContainer from '../NoteContainer/NoteContainer'

class NoteAppContainer extends React.Component {
 constructor(){
  super()
  this.state = {
   notes: [{
    tags: [],
    title: '',
    body: ' '
   }]
  }
 }

 componentDidMount(){
  axios
  .get('https://fe-notes.herokuapp.com/note/get/all')
  .then(response => {
   this.setState({
    notes: response.data
   })
  })
  .catch(err => {
   console.log(err)
  })
 }
 render() {
  return (
   <div>
    <NoteListContainer notes={this.state.notes}  />
    <NoteContainer notes={this.state.notes} />
   </div>
  );
 }
}

export default NoteAppContainer;
