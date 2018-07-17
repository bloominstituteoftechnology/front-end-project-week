import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import LambdaNav from './containers/LambdaNav';
import LambdaForm from './components/LambdaForm';
import LambdaNotes from './containers/LambdaNotes';
import { Route } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  width: 1000px; 
  margin: 0 auto;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
`

const StyledComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: #F3F3F3;
  width: 100%;
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
      ],
      title: '',
      body: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddnote = e => {
    const notes = this.state.notes.slice();
    notes.push({ title: this.state.title, content: this.state.content, id: Date.now() });
    this.setState({ notes, title: '', body: '' });
  }

  render() {
    return (
      <StyledContainer>
        <StyledComponent>
        <Route path="/" component={LambdaNav} />
        <Route axact path ="/" render={props =>(<LambdaNotes {...props} notes={this.state.notes} />)} />
        <Route path="/form" render={props => (<LambdaForm {...props} title={this.state.title} body={this.state.body} handleAddnote={this.handleAddnote} handleChange={this.handleChange} />)} />  
        </StyledComponent>
      </StyledContainer>
    )
  }
}

export default App;
