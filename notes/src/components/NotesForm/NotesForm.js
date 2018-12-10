// importing libraries
import React from 'react';
import styled from 'styled-components';

// importing styled component
import { Button, Input } from '../../styled/styled';

// styled form
// styled Notes List
const FormWrapper = styled.div`
  padding: 4rem 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  textarea {
    all: unset;
    background-color: white;
    border: 1px solid #424142;
    border-radius: .3rem;
    width: 100%;
    height: 40vh;
    padding: .5rem;
    margin-bottom: 2rem;
  }
`;

class NotesForm extends React.Component {
  state = {
    _id: '',
    title: '',
    textBody: '',
    tags: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  componentDidMount() {
    const { update, note } = this.props;
    
    update && this.setState({
      _id: note._id,
      title: note.title,
      textBody: note.textBody,
      tags: note.tags.join(', ')
    })
  }


  onSubmit = e => {
    e.preventDefault();

    const { _id, title, textBody, tags } = this.state;
    const { update, updateNote, addNote, history } = this.props;

    const note = {
      title,
      textBody,
      tags: [tags.split(',').map(tag => tag.trim())]
    };

    update ? updateNote(note, _id) : addNote(note);

    this.setState({
      title: '',
      textBody: '',
      tags: '',
    })

    history.push('/');
  }

  render() {
    const {title, textBody, tags} = this.state;
    const { update } = this.props;

    return (
      <FormWrapper>
        <h2>{update ? 'Update Note:' : 'Create New Note:'}</h2>
        <form action="submit" onSubmit={this.onSubmit}>
          <Input type="text"
            onChange={this.onChange}
            placeholder="Add title"
            name="title"
            value={title}
          /><br/>
          <textarea type="text"
            onChange={this.onChange}
            placeholder="Add note"
            name="textBody"
            value={textBody}
          /><br/>
          <Input type="text"
            onChange={this.onChange}
            placeholder="Add tags"
            name="tags"
            value={tags}
          /><br/>
          <Button style={{margin: '0'}} type="submit">{update ? 'Update' : 'Save'}</Button>
        </form>
      </FormWrapper>
    )
  }
}

export default NotesForm