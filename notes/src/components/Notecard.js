import React, { Component } from 'react';

import styled from 'styled-components'

const Card = styled.div`
    background: white;
    height: 220px;
    border: 1px solid #ccc;
`

class Notecard extends Component {
  render() {
    return (
      <Card>
       <h4>{this.props.note.title}</h4>
       <p>{this.props.note.body}</p>
      </Card>
    );
  }
}

export default Notecard;


