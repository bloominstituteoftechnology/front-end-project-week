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
    const { notes, match } = this.props
    const note = notes.find(item => item.id === String(match.params.id));
    this.setState(note)
  }

  inputHandle = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = (e) => {
  e.preventDefault()
  }
  render() {
    return (
      <div className="createNote">
        <h1>Update Note</h1>
        <form onSubmit={this.submitHandler}>
          <input name="title" onChange={this.changeHandler} value={this.state.title}></input>
          <textarea name="text" onChange={this.changeHandler} value={this.state.text} className="textArea"></textarea>
          <Button type="submit" color="info">Submit</Button>
        </form>
      </div>
    )
  }
}


export default UpdateNote
