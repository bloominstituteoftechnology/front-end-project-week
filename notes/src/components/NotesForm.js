// importing libraries
import React from 'react';
import styled from 'styled-components';

// styled form
// styled Notes List
const FormWrapper = styled.div`
  padding: 4rem 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  form {
    input {
      all: unset;
      background-color: white;
      border: 1px solid #424142;
      padding: .5rem;
      width: 50%;
      font-size: 1.6rem;
      border-radius: .3rem;
      margin-bottom: 2rem;

      &:focus {
        background-color: lightyellow;
      }
    }
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

  button {
    width: 20%;
    min-width: 20rem;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1rem;
    background-color: #24B8BD;
    color: white;
    border: 1px solid #424142;
    cursor: pointer;
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
      tags: note.tags.join(',')
    })
  }


  onSubmit = e => {
    e.preventDefault();

    const { _id, title, textBody, tags } = this.state;
    const { update, updateNote, addNote, history } = this.props;

    const note = {
      title,
      textBody,
      tags: tags.split(',')
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
          <input type="text"
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
          <input type="text"
            onChange={this.onChange}
            placeholder="Add tags"
            name="tags"
            value={tags}
          /><br/>
          <button type="submit">{update ? 'Update' : 'Save'}</button>
        </form>
      </FormWrapper>
    )
  }
}

export default NotesForm