import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './css/newnote.css';

export default class NewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      id: '',
      count:  props.count,
    }
  }

  sendToApp = (e) => {
    console.log(this.props)
    if (this.props.button === "Save") {
      this.props.newNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
    this.setState({
      title: '',
      body: '',
    })
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      id: this.state.count,
    })
  }

  render() {
    return (
        <div>
          <form onSubmit={this.sendToApp}>
            <input className="input" id="title"
              onChange={this.inputHandler}
              name='title' value={this.state.title} placeholder="Note Title">{this.value}</input>
            <textarea className="input" id="body"
              name='body'
              onChange={this.inputHandler} value={this.state.body} placeholder="Note Content">{this.value}</textarea>
            <Link className="menu-item" onClick={this.sendToApp} to="/listnotes">{this.props.button}</Link>
          </form>
        </div>
    );
  }
}
