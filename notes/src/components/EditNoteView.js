import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { editNote } from '../actions';
import './CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    entry: '',
    id: '',
    redirect: false,
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.editNote(this.state);
    this.props.history.push('/');
  }

  componentDidMount() {
    if (this.props.match.params.id === undefined) {
      this.setState({ redirect: true });
    }
    if ( this.props.current !== undefined ) {
      const { title, entry } = this.props.current;
      this.setState({ title: title, entry: entry, id: this.props.match.params.id });
    } else {
      const toEdit = this.props.notes.filter(note => this.props.match.params.id === note.id);
      if (toEdit.length > 0) {
        this.setState({ title: toEdit[0].title, entry: toEdit[0].entry, id: toEdit[0].id });
      } else {
        this.setState({ redirect: true });
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className='create-note'>
        <form onSubmit={this.onSubmit}>
          <h2>Edit Note:</h2>
          <input onChange={this.onChange} value={this.state.title} name='title' placeholder='Note Title' required='true'/>
          <textarea onChange={this.onChange} value={this.state.entry} name="entry" placeholder='Note Content' required='true'></textarea>
          <button type='submit'>Save</button>
        </form>
        {this.state.redirect ? <Redirect to='/404' /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.current,
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { editNote })(CreateNote);