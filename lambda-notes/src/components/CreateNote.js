import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/index';

class CreateNote extends Component {
  constructor(props){
    super();
    this.state = {
      title: '',
      textBody: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.postNote(this.state)
  }

  render(){
    return (
      <>
        <h1>Create New Note:</h1>
        <form onSubmit={this.submitHandler}>
          <input placeholder="Note Title" name="title" onChange={this.changeHandler} value={this.state.title} />
          <input placeholder="Note Content" name="textBody" onChange={this.changeHandler} value={this.state.textBody} />
          <button type="text">Save</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { postNote })(CreateNote);