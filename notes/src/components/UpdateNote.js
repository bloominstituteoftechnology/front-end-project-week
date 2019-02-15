import React, { Component } from 'react'
import {Button} from 'reactstrap'


class UpdateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
    }
  }
  componentDidMount() {
    const {notes,match} = this.props
    const note = notes.find(note => note._id === String(match.params.id))
    console.log(note, "note")
    console.log(match.params.id, "params")
    console.log(notes,"notes")
    this.setState({
      title:note.title,
      text: note.textBody,
      id: note._id})
  }

  inputHandle = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e,id) => {
  e.preventDefault()
  const note={title: this.state.title, textBody: this.state.text, id: this.state.id}
  this.props.updateNote(note.id,note)
  this.props.history.push('/')

  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <div className="createNote">
        <h1>Update Note</h1>
        <form>
          <input name="title" onChange={this.changeHandler} value={this.state.title}></input>
          <textarea name="text" onChange={this.changeHandler} value={this.state.text} className="textArea"></textarea>
          <Button onClick={this.submitHandler} type="submit" color="info">Submit</Button>
        </form>
      </div>
    )
  }
}


export default UpdateNote
