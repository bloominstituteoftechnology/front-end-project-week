import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Delete from './Delete';

import * as actions from '../../actions';

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #222;
`;

const Content = styled.p`
  font-size: 20px;
  padding: 50px 0;
`;

const Input = styled.input`
  width: 600px;
  height: 40px;
  font-size: 16px;
  border: 2px solid #aaa;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
`;

const TextArea = styled.textarea`
  width: 1000px;
  height: 500px;
  font-size: 16px;
  border: 2px solid #aaa;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  height: ${window.innerHeight}px;
  padding: 60px 40px;
`;

const FormHeading = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 15px 0;
  color: white;
  border-radius: 3px;
  border: 1px solid #aaa;
  font-size: 20px;
  font-weight: bold;
  background: #009999;
  &:hover {
    color: #009999;
    background: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  padding: 0 20px;
  height: ${window.innerHeight}px;
`;

const Header = styled.div`
  align-self: flex-end;
  padding: 40px 0;
`;

const HeaderElement = styled.span`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: underline;
`;

class SingleNoteControl extends Component {
  state = {
    canEdit: false,
    title: '',
    body: '',
    delete: false
  };

  componentDidMount() {
    const id = this.props.match.params;
    this.props.fetchNote(id);
  }

  componentDidUpdate(prevProps) {
    const { note } = this.props.notes;
    if (prevProps.notes.note !== note) {
      this.setState({ title: note.title, body: note.textBody });
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEditPerms = () => {
    this.setState({ canEdit: !this.state.canEdit });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const note = {
      title: this.state.title,
      textBody: this.state.body,
      tags: []
    };
    this.props.updateNote(id, note);
    this.setState({ canEdit: !this.state.canEdit });
  };

  handleModal = () => {
    this.setState({ delete: true });
  };
  handleDelete = () => {
    const { id } = this.props.match.params;
    this.props.deleteNote(id);
    this.props.history.push('/');
  };

  cancelDelete = () => {
    this.setState({ delete: false });
  };
  render() {
    const { note } = this.props.notes;
    if (!note) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        {this.state.delete ? (
          <Delete
            handleDelete={this.handleDelete}
            cancelDelete={this.cancelDelete}
          />
        ) : null}
        {!this.state.canEdit ? (
          <Container>
            <Header>
              <HeaderElement onClick={this.handleEditPerms}>edit</HeaderElement>
              <HeaderElement onClick={this.handleModal}>delete</HeaderElement>
            </Header>
            <Title>{note.title}</Title>
            <Content>{note.textBody}</Content>
          </Container>
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <FormHeading>Edit Note:</FormHeading>
            <Input
              onChange={this.handleInput}
              name="title"
              value={this.state.title}
              type=""
            />
            <TextArea
              onChange={this.handleInput}
              name="body"
              value={this.state.body}
            />
            <Button>Update</Button>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state
});
export default connect(
  mapStateToProps,
  actions
)(SingleNoteControl);
