import React from 'react'
import PropTypes from 'prop-types'

class CreateNote extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      textBody: ''
    }
  }

  inputHandler = (e) => {this.setState({[e.target.name]: e.target.value}) }

  createNote = () => {
    return this.props.createNote({...this.state})
  }

  render () {
   return (
     <form onSubmit={this.createNote}>
      <input onChange={this.inputHandler} />
     </form>
   )
  }
}

export default CreateNote;
