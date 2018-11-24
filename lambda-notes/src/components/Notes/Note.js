import React, { Component } from 'react';
import axios from 'axios';
// import { instance } from './../utils.js';
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
  margin: 85px 25px 10px 10px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

const Text = styled.div`
  width: 85%;
  margin: 5px 10px;
`;

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    console.log('Note mounted');
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response);
        this.setState(() => ({ note: response.data }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.note) {
      return <div className='Note'>Loading note information...</div>
    }

    const { title, textBody } = this.state.note;
    return (
      <Container>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Text>
          {textBody}
        </Text>
      </Container>
    );
  }
}
