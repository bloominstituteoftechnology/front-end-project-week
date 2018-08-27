import React, { Component } from 'react';
import './Sidebar.css'
import styled from 'styled-components'

import Notecard from './Notecard'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
    margin: 0 20px;
    min-width: 200px;
`
class Notelist extends Component {
  state = {
    notes: this.props.notes
  }
  render() {
    return (
      <Grid>
        {this.props.notes.map(note => {
            return <Notecard key={note.id} note={note} />
        })}
      </Grid>
    );
  }
}

export default Notelist;


