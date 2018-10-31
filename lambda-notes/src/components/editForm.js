import React, { Component } from 'react';
import { editNote } from '../actions';
import { connect } from 'react-redux';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editTitle: '',
        editTextBody: '',
        id:''
    }
  }
  componentDidMount() {
    // const currentNote = this.props.notes.find(note => note._id === this.props.match.params.id)
    // this.setState({
    //     editTitle: currentNote.title,
    //     editTextBody: currentNote.textBody,
    //     id: currentNote._id
    // })
    console.log(this.props.notes)
  }
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  handleEdit = event => {
    event.preventDefault();
    this.props.editNote(this.state);
    this.setState({ newNote: '' });
    this.props.history.push('/notes');
  };
  render() {
    return (
      <form onSubmit={()=>{}} className='form'>
        <h3 className='add-header'>Edit Note:</h3>
        <input 
          onChange={this.handleInputChange}
          className='title'
          type='text'
          name='editTitle' 
          value={this.state.editTitle}
          placeholder='Note Title'/>
        <input 
          onChange={this.handleInputChange}
          className='body'
          type='text'
          name='editTextBody' 
          value={this.state.editTextBody}
          placeholder='Note Content'/>
        <button className='save' onClick={this.handleEdit}>Submit</button>
    </form>
    );
  }
}

const mapStateToProps = state => { 
  return {
      notes: state.notes,
      editing: state.editing
  };
};
export default connect(mapStateToProps, { editNote })(EditForm);