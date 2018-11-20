import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateNote } from '../actions/notesActions'

class UpdateNote extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      priority: '',
      summary: '',
      textBody: '',
      urlAddress:'',
    }
  }

  componentDidMount(){
    const { notes, match } = this.props 
    const note = notes.find( item => item.id === Number(match.params.id))
    this.setState(note)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateNote(this.state)
  }
  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="nickname" value={this.state.nickname} onChange={this.inputHandler} placeholder="Nickname"/>
        <input type="text" name="description" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
        <input type="text" name="img" value={this.state.img} onChange={this.inputHandler} placeholder="Image URL"/>
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}
export default connect(mapStateToProps, { updateNote })(UpdateNote)