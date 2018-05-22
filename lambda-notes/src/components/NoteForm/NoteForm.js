import React, { Component } from 'react';
import Button from '../Button';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      contents: ''
    }
  }
  handleChange= event => {
    this.setState({ [event.target.name]:event.target.value });
  }
  render() { 
    return (
      <div>
        <form>
          <input 
            className="form-control"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
          />
          <textarea
            className="form-control"
            name="contents"
            placeholder="Note Content"
            onChange={this.handleChange}
          />
          <Button type="primary" title={this.props.action} link="/" />
        </form>
      </div>
    )
  }
}

export default NoteForm;