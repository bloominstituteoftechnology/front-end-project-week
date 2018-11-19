import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/index';

class EditView extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      textBody: ''
    }
  } 

  componentDidMount(){
    console.log("id:", this.props.match.params.id)
    const note = this.props.notes.find(note => note._id === this.props.match.params.id)
    console.log(note)
    this.setState( note )
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.updateNote(this.state)
  }

  render(){
    return (
      <>
        <h1>Edit Note</h1>
        <form onSubmit={this.submitHandler}>
          <input placeholder="Note Title" name="title" onChange={this.changeHandler} value={this.state.title} />
          <input placeholder="Note Content" name="textBody" onChange={this.changeHandler} value={this.state.textBody} />
          <button type="text">Update</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { updateNote })(EditView);