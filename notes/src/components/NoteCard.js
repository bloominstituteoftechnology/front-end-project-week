import React from 'react';
import {Route} from 'react-router-dom'
import DeleteNote from './DeleteNote'
import axios from 'axios';
class NoteCard extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        note: []
      }
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => this.setState({note: res.data}))
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  prepareToDelete = (event, id) => {

  }


  render() {
    return(
        <div className="single-note-and-delete-container">
        <Route path={'/note/deleteNote/:id'}  render={(props => <DeleteNote {...props} deleteNote={this.props.deleteNote}/>)} />
          <div className='single-note-links'>
          <button
           onClick={event => {this.props.history.push(`/note/deleteNote/${this.state.note._id}`)}}>Delete Note</button>
          <button
              value={this.state.note.id}
              onClick={event => {
                this.props.history.push(`/updateForm/${this.state.note._id}`)
                console.log('button event', event.target.value)
              }} >
              Update Note
              </button>
            </div>
        <div className='single-note-container-page'>
          <div className='single-note-container'>
            <h3>{this.state.note.title}</h3>
            <p>{this.state.note.textBody}</p>
          </div>
        </div>

        </div>
     )

  }
};
export default NoteCard;
