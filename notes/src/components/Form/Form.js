import React, { Component } from 'react';
import Button from '../Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      note: {
        title: '',
        noteContent: ''
      }
    };
  }

  handleInputChange = e => {
    const note = this.state.note;
    note[e.target.name] = e.target.value;
    this.setState({ note: note });
  };

  onSubmit = () => {
    this.props.onSubmitNote(this.state.note);
    this.setState({note: {
      title: '',
      noteContent: ''
    }});
    console.log('submitted');
  };

  render() {
    return (
      <form>
        <input 
          id="title" 
          name="title" 
          className="form__title" 
          type="text" 
          placeholder="Note Title"
          value={this.state.note.title}
          onChange={this.handleInputChange} />
        <textarea 
          id="noteContent" 
          name="noteContent" 
          className="form__content" 
          wrap="hard" placeholder="Note Content"
          value={this.state.note.noteContent}
          onChange={this.handleInputChange} />
        <Button 
          type="submit" 
          onSubmit={this.onSubmit} 
          text={this.props.buttonText} />
      </form>
    );
  }
};

export default Form;