import React, { Component } from 'react';
import Button from './Button';

export default class Form extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleButton = () => {
    this.props.action(this.state);
    this.setState({ title: '', content: '', id: '', });
  }
  componentDidMount() {
    const { note } = this.props;
    if (note) {
      this.setState({ title: note.title, content: note.content, id: note.id })
    } 
  }
  render() {
    let props = {
      text: this.props.button,
      clickButton: this.handleButton
    }
    return(
      <div className="form-block">
        <input 
          name="title"
          className="form-title"
          value={this.state.title}
          placeholder='Note Title'
          onChange={this.handleChange}
        />
        <textarea rows="30"
          name="content"
          className="form-content"
          value={this.state.content}
          placeholder="Note Content"
          onChange={this.handleChange}>
        </textarea>
        <Button {...props} />
      </div>
    );
  }
}