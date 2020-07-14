import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './css/form.css';


export default class NewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      textBody: ""
    }
  }

  sendToApp = (e) => {
    this.props.newNote(this.state)
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.sendToApp}>
          <input
            className="input"
            id="title"
            onChange={this.inputHandler}
            name='title'
            value={this.state.title}
            placeholder="Note Title"
          >{this.value}</input>
          <textarea
            className="input"
            id="textBody"
            name='textBody'
            onChange={this.inputHandler}
            value={this.state.textBody}
            placeholder="Note Content"
          >{this.value}</textarea>
          <Link
            className="menu-item"
            onClick={this.sendToApp}
            to="/listnotes"
          >{this.props.button}</Link>
        </form>
      </div>
    );
  }
}
