import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EditeNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: '',
      index: '',
      title: '',
      text: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = (e) => {
    const id = this.state.notes[this.state.index]._id;
    const obj = {
      title: this.state.title,
      text: this.state.text
    }

    this.props.updatenote(id, obj);
  }

  render() {
    return (
      <div className='add-note'>
        <h3>Edite Note: </h3>
        <input onChange={this.onChange} value={this.state.title} name='title' type='text' placeholder='Note title' />
        <textarea onChange={this.onChange} value={this.state.text} name='text' placeholder='Note Content' rows='20' />
        <Link onClick={this.handleClick} className='save-button' to="/NotesList">Update</Link>
      </div>
    )
  }

  componentDidMount() {
    const newNotes = this.props.notes;
    const newIndex = this.props.match.params.id;
    const oldTitle = newNotes[newIndex].title;
    const oldText = newNotes[newIndex].text;
    //console.log(this.state.notes[this.state.index]._id);
    this.setState({
      notes: newNotes,
      index: newIndex,
      title: oldTitle,
      text: oldText
    })
  }
}



export default EditeNote;


