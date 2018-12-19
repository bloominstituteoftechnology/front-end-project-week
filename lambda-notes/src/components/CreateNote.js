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
      <div className="main-container create">
        <h2>Create New Note:</h2>
        <form onSubmit={this.submitHandler} className="form create-form">
          <input type="text" placeholder="Note Title" name="title" onChange={this.changeHandler} value={this.state.title} className="title-input" />
          <textarea type="text" placeholder="Note Content" name="textBody" onChange={this.changeHandler} value={this.state.textBody} className="content-input" />
          <button type="text">Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { postNote })(CreateNote);