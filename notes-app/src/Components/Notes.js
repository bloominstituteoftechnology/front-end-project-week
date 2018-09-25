import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';
import EachNote from './EachNote';

class Notes extends Component {
    constructor(){
      super()
        this.state = {
          notes: [],
          tags: '',
          title: '',
          textBody: ''
  
        };
    }
  
    componentDidMount() {
      this.getNotes();
    }
  
    getNotes = () => {
      axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    }
  
  
  
    
  
  
    deleter = id => {
      console.log(id)
      axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => this.getNotes())
        .catch(error => console.log(error))
    }
  
    render() {
      return (
        
        <div className="inner_outer_notes">
            <h3 className="list_title">Your Notes:</h3>
            <div className="note_container">
          {this.state.notes.map(each => ( 
            <EachNote className="eachOne" key={each._id} note={each} deleter={this.deleter} />
          ))}

        </div>
        </div>
        
      );
    }
  }
  
  
//   function Notes(props){
//     return (
//       <div onClick={()=>{props.deleter(props.note._id)}}> {props.note.title} ||||| {props.note.textBody} x</div>
//     )
//   } 
  
  
  
  
//   export default App;



  export default Notes;