import React, { Component } from 'react';
import {data} from '../NoteData';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom'


class EditNote extends Component {
constructor(props) {
    super(props)
    this.state = {
        notes: [],
        editedNote: {
        title: '',
        body: '',
        id: 0
}
    }
}


// handleEditNote = e => {
//     e.preventDefault();
//     let editedNotes = this.props.notes.slice();
//     editedNotes.push(this.state.editedNote)
//     this.setState({ editedNote: {title: '', body: '', id: 0 }})
// }


handleInputChange = (editedNote, e) => {
    this.setState({[editedNote]: {...this.state[editedNote], [e.target.name]: e.target.value }});
  };

//   handleInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

handleEditNote = (e) => {
    e.preventDefault();
    const editedNote = {
            title: this.state.title,
            body: this.state.body,
            id: this.state.id
            }
    let newArray= this.props.notes.slice();
    newArray.push({title: this.state.title, body: this.state.body})
    this.setState({ title: '', body: '', id: 0 });
    // this.props.editNote(this.state);
    this.props.history.push('/');
        }

componentDidMount() {
    this.setState({ notes: this.props.location.state.notes})
    this.setState({ editedNote: {title: this.props.location.state.title, body: this.props.location.state.body, id: this.props.location.state.id }})
}

render() {
    return (
        <div className="NoteForm">
        <Sidebar />
        <form>
        <input
            onChange={this.handleInputChange.bind(this, 'editedNote')}
            placeholder={this.props.title}
            value={this.state.editedNote.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange.bind(this, 'editedNote')}
            placeholder={this.props.body}
            value={this.state.editedNote.body}
            name="body"
          />
          </form>
            <Link to={'/'}> 
          <button onClick={this.handleEditNote}>Update</button>
          </Link>
          </div>
    )
}
}

export default EditNote;