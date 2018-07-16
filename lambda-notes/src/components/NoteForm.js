import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    const { note, buttonText } = props;
    const { title, textBody } = note;
    this.state = {
      title,
      textBody
    };
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    const {title, textBody } = this.state;
    const { buttonText } = this.props;
    return (
      <div className="note">
        <h1>Edit Note:</h1>
        <form>
          <input 
            type="text"
            name="title"
            placeholder="Note Title"
            value={ title }
            onChange={ this.updateInput } />
          <input 
            type="text"
            name="textBody"
            placeholder="Note Content"
            value = { textBody }
            onChange={ this.updateInput } />
          <Link to="/">
            <Button>
              { buttonText }
            </Button>
          </Link>
        </form>
      </div>
    )
  }
}