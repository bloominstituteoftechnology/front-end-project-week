import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class EditForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      title: this.props.note.title,
      textBody: this.props.note.textBody,
      _id: this.props.note._id,
      
    }
  }

  sendToApp = (e) => {
    this.props.editNote(this.state)
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
            id="body"
            name='textBody'
            onChange={this.inputHandler}
            value={this.state.textBody}
            placeholder="Note Content"
          >{this.value}</textarea>




          <Link
            className="menu-item"
            onClick={this.sendToApp}
            to={`/listnotes/${this.state._id}`}
          >Save</Link>

        </form>
      </div>
    );
  }
}
