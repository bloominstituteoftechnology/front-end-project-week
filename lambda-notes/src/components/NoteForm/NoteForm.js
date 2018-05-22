import React, { Component } from 'react';
import Button from '../Button';
import { notes } from '../../data/notes';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      contents: ''
    }
  }
  handleChange= event => {
    this.setState({ [event.target.name]:event.target.value });
  }
  componentDidMount(){
    if (this.props.noteId){
      const currentNote = notes.filter(x => x.id === +this.props.noteId);
      this.setState({ title: currentNote[0].title, contents: currentNote[0].value });
    }
  }
  render() { 
    return (
      <React.Fragment>
        <form className="save-note-form">
          <input
            className="form-control title"
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            className="form-control contents"
            name="contents"
            placeholder="Note Content"
            value={this.state.contents}
            onChange={this.handleChange}
          />
          <Button
            type="primary"
            title={this.props.action}
            link={(this.props.noteId) ? `/note/${this.props.noteId}` : "/"}
          />
        </form>
      </React.Fragment>
    )
  }
}

export default NoteForm;