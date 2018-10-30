import React from 'react';
import { connect } from 'react-redux';

import { addNote, editNote, getANote } from '../../store/actions';

import { Form, Input, Textarea, Button } from '../style/noteFormStyle';

class NoteForm extends React.Component {
  state = {
    title: '',
    textBody: '',
    _id: null,
  };

  filterProps = () => {
    this.props.notes.forEach(note => {
      if (parseInt(this.props.match.params.id, 10) === note._id) {
        this.setState({ ...note });
      }
    });
  };

  componentDidMount() {
    this.setState({
      title: '',
      textBody: '',
      _id: null,
    });
  }

  // componentDidUpdate(prevProps) {
  //   const id = this.props.match.params.id;
  //   if (this.props.note._id !== prevProps.note._id) {
  //     this.props.getANote(id);
  //     this.setState({ note: { ...this.props.note } });
  //   }
  // }

  componentWillReceiveProps() {
    console.log('hi');
    if (this.props.match.url === '/noteform/create') {
      this.setState({
        title: '',
        textBody: '',
        _id: null,
      });
    } else {
      this.setState({ ...this.props.note });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = e => {
    e.preventDefault();
    const pathName = this.props.match.url;
    if (pathName === '/noteform/create') {
      this.props.addNote(this.state);
    } else {
      this.props.editNote(this.state);
    }
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/');
  };

  render() {
    const pathName = this.props.match.url;
    return (
      <Form>
        <h2>
          {pathName === '/noteform/create' ? 'Create New Note:' : 'Edit Note:'}
        </h2>
        <Input
          name="title"
          type="text"
          placeholder="Note Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Textarea
          name="textBody"
          placeholder="Note Content"
          value={this.state.textBody}
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={this.handleClick}>
          {pathName === '/noteform' ? 'Save' : 'Upadate'}
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
  };
};

export default connect(
  mapStateToProps,
  { addNote, editNote, getANote }
)(NoteForm);
