import React from "react";
import { connect } from 'react-redux';

import { addNote, editNote } from '../../store/actions';


class NoteForm extends React.Component {
  state = {
      title: '',
      description: '',
      id: null,
      editNote: false
  }

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (parseInt(this.props.match.params.id, 10) === note.id) {
        this.setState({...note});
      }
    });
  };

  componentDidMount() {
    this.filterProps();
    this.setState({ editNote: true })

  }

  componentWillReceiveProps() {
    this.setState({ title: '', description: '', editNote: false })   
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.editNote? this.props.editNote(this.state):this.props.addNote(this.state);
    this.setState({ title: '', description: '', editNote: false });
    this.props.history.push('/noteform');
  }


  render() {
    return (
      <form>
        <h2>{this.state.editNote? 'Edit Note:':'Create New Note:'}</h2>
        <input 
          name='title' 
          type='text' 
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea  
          name='description' 
          placeholder='Note Content' 
          value={this.state.description}
          onChange={this.handleChange}
        >
        </textarea>
        <button type='submit' onClick={this.handleClick}>{this.state.editNote? 'Update':'Save'}</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { addNote, editNote }
)(NoteForm);
