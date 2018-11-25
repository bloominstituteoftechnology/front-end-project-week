import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { instance } from '../../utils.js';
import styled, { css } from 'styled-components';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      isEditing: false,
      modal: false
    };
  }

  componentDidMount() {
    console.log('Note mounted');
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
      instance.get(`/get/${id}`)
      .then(response => {
        console.log(response);
        this.setState(() => ({ note: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInput = (e) => {
    let { note } = this.state;
    note[e.target.name] = e.target.value
    this.setState({
      note
    });
  }

  handleSubmit = () => {
    // /edit/${this.note._id}
    console.log('some updated changes', this.state.note);
    instance.put(`/edit/${this.state.note._id}`, {
      title: this.state.note.title,
      textBody: this.state.note.textBody
    })
    .then(response => {
      console.log(response);
      this.props.history.push(`/`);
    })
    .catch(err => {
      console.log('Sorry, we could not complete your request', err);
    })
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  toggle = () => {
    console.log(this.state.modal);
    this.setState({
      modal: !this.state.modal
    });
  }

  handleDelete = () => {
    const id = this.props.match.params.id;
    console.log(id);
    instance.delete(`/delete/${this.state.note._id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          modal: false
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log('Sorry, we could not complete your request...');
      })
  }

  render() {
    if (!this.state.note) {
      return <div className='Note'>Loading note information...</div>
    }

    if (this.state.isEditing) {
      return (
        <Form onSubmit={this.onSubmit}>
          <Label for="New Note">Create New Note:</Label>
          <TitleInput
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.note.title}
            onChange={this.handleInput} />
          <NoteContent
            type="textarea"
            name="textBody"
            placeholder="Note Content"
            value={this.state.note.textBody}
            onChange={this.handleInput} />
          <SaveButton type="submit" onClick={this.handleSubmit}>Save</SaveButton>
        </Form>
      );
    }

    const { title, textBody } = this.state.note;
    return (
      <Container>
        <Header>
          <Updates>
            <p onClick={this.toggleEdit}>edit</p>
            <p onClick={this.toggle}>delete</p>
          </Updates>
          <Title>{title}</Title>
        </Header>
        <Text>
          {textBody}
        </Text>
        <DeleteModal
          modal={this.state.modal}
          toggle={this.toggle}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

const DeleteModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <div>Are you sure you want to delete this?</div>
      <div>
        <div onClick={props.handleDelete}>Delete</div>
        <div onClick={props.toggle}>No</div>
      </div>
    </Modal>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background: #F2F1F2;
  border: 1px solid #B7B7B7;
  width: 80%;
`;

const Header = styled.div`
  width: 100%;
`;

const Updates = styled.div`
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  margin: 10px;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin: 75px 10px 25px 10px;
`;

const Text = styled.div`
  width: 85%;
  margin: 5px 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #F2F1F2;
  border: 1px solid #B7B7B7;
  padding: 85px 25px 20px 20px;
  width: 80%;
`;

const Label = styled.label`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 40px;
`;

const TitleInput = styled.input`
  line-height: 25px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 5px;
  width: 57%;
`;

const NoteContent = styled.textarea`
  font-family: inherit;
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
`;

const SaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background: #24B8BD;
  border: 1px solid #B7B7B7;
  height: 25px;
  width: 200px;
  padding: 10px 0;
  margin: 15px 0;
  cursor: pointer;
`;
