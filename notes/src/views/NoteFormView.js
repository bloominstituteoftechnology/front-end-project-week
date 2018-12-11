import React from 'react';
import { connect } from 'react-redux';

import { addNewNote, updateNote } from '../actions';

import NoteForm from '../components/NoteForm';

const initialValues = {
    title: '',
    textBody: '',
    tags: []
  };

class NoteFormView extends React.Component {
    state = {
        note: {
           title: '',
           textBody: '',
           tags: []
        },
        isUpdating: false,
    };

    componentDidMount() {
      console.log(this.props);
      if (this.props.noteToUpdate) {
        this.setState({ isUpdating: true, note: this.props.noteToUpdate });
      }
    }

    handleChange = event => {
        if (event.target.name === 'tags') {
          const tags = event.target.value.split(', ');
          this.setState({
            note: {
              ...this.state.note,
              tags,
            }
          });
        } else {
          this.setState({
            note: {
              ...this.state.note,
              [event.target.name]: event.target.value,
            }
          });
        }
    }

    handleAddNewNote = event => {
        event.preventDefault();
        console.log('it working :)')
        this.props.addNewNote(this.state.note);
        this.props.history.push('/notes');
    }

    handleUpdateNote= () => {
      this.props.updateNote(this.state.note);
      this.props.history.push('/notes');
    }

    render() {
        return (
            <NoteForm 
              {...this.props} 
              note={this.state.note} 
              handleAddNewNote={this.handleAddNewNote}
              handleChange={this.handleChange}
              handleUpdateNote={this.handleUpdateNote}
              isUpdating={this.state.isUpdating} 
            /> 
        );
    }
}

const mapStateToProps = state => ({
  noteToUpdate: state.noteToUpdate,
});

export default connect(mapStateToProps, { addNewNote, updateNote })(NoteFormView);