import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    if (this.props.note) {
      this.state = {
        id: this.props.note._id,
        tags: this.props.note.tags,
        title: this.props.note.title,
        textBody: this.props.note.textBody,
      }
    } else {
      this.state = {
        tags: [],
        title: '',
        textBody: '',
      }
    }
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render(){
  return (
    <form>
    <h2>{this.props.notes ? 'Edit Note:' : 'Create New Note:'}</h2>
      <input
        type='text'
        name='title'
        value={this.state.title}
        onChange={this.handleInput}
        placeholder='Note Title'
      />
      <textarea
        type='text'
        name='textBody'
        value={this.state.textBody}
        onChange={this.handleInput}
        placeholder='Note Content'
      />
    </form>
  )
  }

}

export default Form;
