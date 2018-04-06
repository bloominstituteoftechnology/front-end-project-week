import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { editNote } from '../actions';
import Loading from './Loading';
import './CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    entry: '',
    id: '',
    dateCreated: '',
    redirect: false,
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { title, entry, id } = this.state;
    this.props.editNote(title, entry, id, this.props.history);
    // this.props.history.push(`/view/${this.state.id}`);
  }

  componentDidMount() {
    if (this.props.match.params.id === undefined) {
      this.setState({ redirect: true });
    } else {
      const { title, entry, _id, dateCreated } = this.props.current;
      this.setState({ title, entry, id: _id, dateCreated });
    }

  }

  render() {
    return (
      <div className='create-note'>
        <form onSubmit={this.onSubmit}>
          <h2>Edit Note:</h2>
          <input onChange={this.onChange} value={this.state.title} name='title' placeholder='Note Title' required='true' maxlength='300'/>
          <div className='area-container'><textarea onChange={this.onChange} value={this.state.entry} name="entry" placeholder='Note Content' required='true' maxlength='80000'></textarea></div>
          {this.props.loading ? <Loading /> : <button type='submit'>Save</button>}
        </form>
        {this.state.redirect ? <Redirect to='/404' /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.notes.current,
    notes: state.notes.notes,
    loading: state.notes.loading,
  };
};

export default connect(mapStateToProps, { editNote })(CreateNote);