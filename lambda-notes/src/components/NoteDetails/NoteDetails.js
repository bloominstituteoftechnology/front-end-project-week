import React, { Component } from 'react';
import Title from '../Title';
import SimpleLink from '../SimpleLink';
import ModalLink from '../ModalLink';
import axios from 'axios';
import history from '../Routes/history';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: ''
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/notes/${this.props.noteId}`)
      .then(response => this.setState({ title: response.data.title, contents: response.data.contents }))
      .catch(error => console.error(error));
  }
  deleteNote = () => {
    axios.delete(`http://localhost:5000/notes/${this.props.noteId}`)
      .then(response => history.push('/'))
      .catch(error => console.error(error));
  }
  render() {
    return ( 
      <div className="note-details">
        <div className="note-actions">
          <SimpleLink title="edit" link={`/edit/${this.props.noteId}`} />
          <ModalLink
            title="delete"
            modalBody="Are you sure you want to delete this?"
            primaryAction={this.deleteNote}
            primaryActionTitle="Delete"
            secondaryActionTitle="No"
          />
        </div>
        <Title title={this.state.title} />
        <div className="note-contents">
          {this.state.contents}
        </div>
      </div>
     )
  }
}
 
export default NoteDetails;