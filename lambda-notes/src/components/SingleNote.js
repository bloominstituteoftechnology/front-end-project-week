import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SNote = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #F3F3F3;
  color: #4A4A4A;
`


class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.fetchNote(id);
  }

  fetchNote = (id) => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchNote(newProps.match.params.id);
    }
  }



  render() {
    if (!this.state.note) {
      return <div>Loading note...</div>;
    }

    const { title, textBody } = this.state.note;
    return (
      <SNote>
        <h1>{title}</h1>
        <p>{textBody}</p>
      </SNote>
    );
  }
}

export default SingleNote;