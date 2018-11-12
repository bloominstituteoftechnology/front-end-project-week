import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { updateNote } from '../actions';


class EditView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("ID", id)
    this.props.updateNote(id);
  }

  handleNoteInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editNoteHandler = e => {
    const { title, textBody } = this.state;const id = this.props.match.params.id;
    const updatedNote = {
      title,
      textBody,
      id
    };
    console.log('UPDATED NOTE', updatedNote)
    this.props.updateNote(updatedNote);
    this.setState({
      title: '',
      textBody: ''
    });
  };

  render () {
    console.log('THIS.PROPS', this.props)
    return (
      <div className='create-new-view'>
        <NavBar />
        <div className='create-new-note'>
          <h2>Edit Note:</h2>
          <input 
            onChange={this.handleNoteInput}
            type='text'
            name='title'
            placeholder='Note Title'
            value={this.state.title}
          />
          <input 
            onChange={this.handleNoteInput}
            type='text'
            name='textBody'
            placeholder='Note Content'
            value={this.state.textBody}
          />
          <button type='button' onClick={this.editNoteHandler}>Update</button>
        </div>
      </div>
    )
  }
}

// export default EditView;

const mapStateToProps = state => {
  return {
    note: state.singleFlatNote.noteSelected,
    showUpdate: state.singleFlatNote.showUpdate
  }
}

export default connect(mapStateToProps, {
  updateNote
})(EditView);