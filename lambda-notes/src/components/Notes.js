import React from 'react'; 
import { Note } from '../components/Note.js'; 
import '../components/Notes.css'; 

export default class Notes extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
      if(this.props.notes.length < 1){
        return <div className='please-sign-in'>Yikes! <br/> Please sign in! </div>
      }
        return(
          <div> 
            <div className='container'> 
              {this.props.notes.map((note, index) => {
                return <Note id={note.id} key={index} title={note.title} image={note.image} textBody={note.textBody}></Note> 
              })}
            </div> 
          </div> 
        )
    }
}