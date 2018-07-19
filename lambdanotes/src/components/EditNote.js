import React, { Component } from 'react';
// import {data} from '../NoteData';
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

// componentDidMount() {
//     this.setState({ notes: data})
// }

editNote = e => {
    e.preventDefault();
    this.state.notes.push(this.state.editedNote)
    this.setState({ editNote: {title: '', body: '', id: 0 }})
}


handleInputChange = (editedNote, e) => {
    this.setState({[editedNote]: {...this.state[editedNote], [e.target.name]: e.target.value }});
  };

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
          <button onClick={this.editNote}>Update</button>
          </Link>
          </div>
    )
}
}

export default EditNote;