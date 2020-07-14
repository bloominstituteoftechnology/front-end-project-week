import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        textBody: ''
    }
  };
  componentDidMount() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note.id === noteId);
    
    this.setState({ ...note });
  };
  handleInputChange = e => this.setState({ 
    [e.target.name]: e.target.value 
  });
  editNote = (e) => {
    e.preventDefault();
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/notes');
  }
  render() {
    return (
      <form onSubmit={() => {}} className='form'>
        <h3 className='add-header'>Edit Note:</h3>
        <input 
          onChange={this.handleInputChange}
          className='title'
          type='text'
          name='title' 
          value={this.state.title}
          placeholder='Note Title'/>
        <textarea 
          onChange={this.handleInputChange}
          className='body'
          type='text'
          name='textBody' 
          value={this.state.textBody}
          placeholder='Note Content'/>
        <button className='save' type='submit'>Submit</button>
    </form>
    );
  }
}
export default EditForm;