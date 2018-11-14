import React from 'react'; 
import {Note} from '../components/Note.js'; 
import '../components/Notes.css'; 
import axios from 'axios'; 

export default class Notes extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
          notes: [{title: "hey", textBody: "yeahjlkja"}, {title: "hey", textBody: ";asjdk;lakjlfj;a"}, {title: "hey"} ,{title: "hey"}]
        }
    }

    componentDidMount(){
      axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
          this.setState({notes: response.data})
        })
          .catch(err => console.log(err)); 
    }

    render(){
        return(
          <div> 
            <h3>Your Notes:</h3>  
            <div className='container'> 
              {this.state.notes.map((note, index) => {
                return <Note key={index} note={note}></Note> 
              })}
            </div> 
          </div> 
        )
    }
}