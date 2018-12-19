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
      <div className="main-container edit">
        <h2>Edit Note</h2>
        <form onSubmit={this.submitHandler} className="form edit-form">
          <input type="text" placeholder="Note Title" name="title" onChange={this.changeHandler} value={this.state.title} className="title-input" />
          <textarea type="text" placeholder="Note Content" name="textBody" onChange={this.changeHandler} value={this.state.textBody} className="content-input" />
          <button type="text">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { updateNote })(EditView);