import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class NoteList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: [],
        newNote: {
          tag: '',
          title: '',
          textBody: '',
        }
      }
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:7000/api/notes')
        .then(response => {
          this.setState({ notes: response.data })
        })
        .catch(error => console.log(error))
  
    }
    
    
  
    render() {
      return (
       
        <div className='container'>
          <div className="App">
          
            <div className='main-view'>
              <div className='title-cont'>
                <h2> Your Notes: </h2>
              </div>
              <div className="cont-body">
                {this.state.notes.map((note, i) => (
                  <Link to={`note/${note.id}`}key={i} >
                  <div className="note">
  
                    <div className='note-title'>
                      <h3>{note.title}</h3>
                    </div>
                  
                    <div className="note-body">
                      {note.textBody}
                    </div>
                    
                  </div>
                 </Link>
                  
                )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default NoteList;