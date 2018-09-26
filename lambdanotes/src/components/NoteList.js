import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import '../App.css';
import styled from 'styled-components';

export default class NoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => {
      this.setState(() => ({ notes: res.data }));
    })
    .catch(err => {
      console.error('Server Error', err);
    });
  }

  render() {
    return(
      <ListDive>
        {this.state.notes.map((n,i) => (
          <NoteCard key={i} note={n} />)
        )}
      </ListDive>
    );
  }
}

const ListDive = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #F3F3F3;
  border: 1px solid #BEBEBE;
`