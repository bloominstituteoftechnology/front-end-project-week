import React from 'react';
import {Route, Link} from 'react-router-dom'
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
    event.preventDefault()
    this.props.deleteNote(id);
    this.props.history.push('/');
  }


  render() {
    return(
        <div className="single-note-and-delete-container">
        <Route path={'/note/deleteNote/:id'}  render={(props => <DeleteNote {...props} prepareToDelete={this.prepareToDelete}/>)} />

          <div className='single-note-links'>
            <Link to={`/note/deleteNote/${this.state.note._id}`}>delete</Link>
            <Link to={`/updateForm/${this.state.note._id}`}>update</Link>
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
