import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNote } from '../actions';

const Content = styled.div`
    width: 666px;
    padding-top: 20px;
    padding-left: 3rem;
    padding-right: 3rem;
`

class AddForm extends React.Component {
  submitHandler = e => {
    e.preventDefault();
    this.props.addNote({
      title: this.titleInput.value,
      textBody: this.contentInput.value
    })
    this.props.history.push('/');
  }

  render() {
    return (
      <Content>
        <h1>Create New Note: </h1>
        <form onSubmit={this.submitHandler}>
          <input
            placeholder="Note Title"
            type="text"
            name="title"
            ref = {node => this.titleInput = node}
          />
          <textarea
            placeholder="Note Content"
            type="text"
            name="body"
            ref = {node => this.contentInput = node}
          />
          <button type='submit'>Save</button>
        </form>
      </Content>
    );
  }
}

export default connect(null, {addNote})(AddForm)