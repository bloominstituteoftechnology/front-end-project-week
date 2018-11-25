import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { instance } from '../../utils.js';
import styled, { css } from 'styled-components';

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

    const { title, textBody } = this.state.note;
    return (
      <Container>
        <Header>
          <Updates>
            <p>edit</p>
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
