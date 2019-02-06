import React from 'react';
import axios from 'axios';
import './Notes.css';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';



class YourNotes extends React.Component {
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
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('Error'))

  }
  

  render() {
    return (
      
      
        <div className="App">

          <div className='main-view'>
            <div className='home-title'>
              <h2>Your Notes: </h2>
            </div>
            <div className="home-body">
              {this.state.notes.map((note, i) => (
                <div className="note">
                
                <Link to={`/note/${note._id}`}key={i} >
                  <div className='note-title'>
                    <h3 className='background-white'>{note.title}</h3>
                  </div>

                  <div className="note-body">
                    <p className='background-white'>{note.textBody}</p>
                  </div>
               </Link>
                  
                </div>
              )
              )}
            </div>
          </div>
        </div>
      
    );
  }
}
export default YourNotes;