import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Notes.css';
import axios from 'axios';

const URL = 'http://localhost:5200/api/';

const token = localStorage.getItem('jwt');
const reqOptions = {
      headers: {
        Authorization: token,
      },
    };

 class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      notes: []
    }
  }

  componentDidMount() {
    // const token = localStorage.getItem('jwt');
    // const reqOptions = {
    //   headers: {
    //     Authorization: token,
    //   },
    // };
    console.log(reqOptions);
    axios
      .get(`${URL}notes`, reqOptions)
      .then(response => {
        console.log(response.data)
         this.setState({ notes: response.data })})
      .catch(error => {
        console.error('Error collecting notes!', error)
      });
  }

  routeToNote(event, note) {
    event.preventDefault();
    this.props.history.push(`/notes/${note.id}`);
    this.props.getNoteById(note.id)
  }
  render() {
  return( 
    <div className='notesPage'>
      <h2>Your Notes:</h2>
      <div className="notesContainer">
        {this.state.notes.map((note, i)=> {
          return (
              <Card
                note={note}
                className="miniNote"
                onClick={event => this.routeToNote(event, note)}
                key={i}>                
                <CardBody className='cardBody'>
                  <CardTitle className='title'>{note.title}</CardTitle>
                  <div className='fade'/>
                  <CardText className='note'>{note.content}</CardText>
                </CardBody>
              </Card>
            )
        })}
      </div>
    </div>
    );
  }
}

export default Notes;