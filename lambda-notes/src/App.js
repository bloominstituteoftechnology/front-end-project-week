import React, { Component } from 'react';
import axios from 'axios'
import List from './components/List';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`

const Sidebar = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 20px;  
  background-color: #D8D8D8;
  color: #4A4A4A;
  border-right: 1px solid darkgrey;
`

const SbButton = styled.button`
  width: 99%;
  height: 50px;
  background-color: #2BC1C4;
  border: 1px solid darkgrey;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  margin: 10px auto;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <AppWrapper>
        <Sidebar>
          <h1>Lambda<br/>Notes</h1>
          <SbButton><h2>View Your Notes</h2></SbButton>
          <SbButton><h2>+ Create New Note</h2></SbButton>
        </Sidebar>
        <List notes={this.state.notes} />
      </AppWrapper>
    );
  }
}

export default App;
