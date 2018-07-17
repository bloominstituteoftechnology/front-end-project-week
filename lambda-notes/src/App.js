import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import LambdaNav from './containers/LambdaNav';

const MainContainer = styled.div`
  display: flex;
  width: 900px; 
  margin: 0 auto;
  height: 100vh;
`;

const ComponentContainer = styled.div`
  width: 75%;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Note # 1",
          id: 1,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 2",
          id: 2,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 3",
          id: 3,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 4",
          id: 4,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 5",
          id: 5,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 6",
          id: 6,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 7",
          id: 7,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 8",
          id: 8,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
        {
          title: "Note # 9",
          id: 9,
          body: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        },
      ]
    }
  }
  render() {
    return (
    <MainContainer>
      <LambdaNav />
      <ComponentContainer>
        {this.state.notes.map(notes => {
          return(
          <div key={notes.id}>
          <h1>{notes.title}</h1>
          <p>{notes.body}</p>
          </div>
          )
        })}
        </ComponentContainer>
      </MainContainer>
    )
  }
}

export default App;
