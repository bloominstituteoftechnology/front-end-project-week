import React, { Component } from 'react';
import styled from 'styled-components';
import LambdaNav from './containers/LambdaNav';
import LambdaNotes from './containers/LambdaNotes';
import LambdaForm from './components/LambdaForm';
import LambdaView from './components/LambdaView';
import LambdaEdit from './components/LambdaEdit';
import LambdaDelete from './components/LambdaDelete';
import { Route } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
`



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      selected: {},
      remove: false
    }
  }


  handleSelectNote = note => {
    this.setState({ selected: note });
  }


  //Lambda Delete

  toggleDelete = () => {
    this.setState({ remove: !this.state.remove })
  }

  render() {
    return (
      <StyledContainer>
        <Route path="/" component={LambdaNav} />
        <Route exact path="/" component={LambdaNotes} />
        <Route path="/form" component={LambdaForm} />
        <Route path="/edit/:id" render={props => (<LambdaEdit {...props} notes={this.state.notes} />)} />
        <Route path="/notes/:id" render={props => (<LambdaView {...props} toggleDelete={this.toggleDelete} />)} />
        {this.state.remove ? (<Route path="/notes/:id" render={props => (<LambdaDelete {...props} handleSelectNote={this.handleSelectNote} toggleDelete={this.toggleDelete} />)} />) : null}
      </StyledContainer>
    )
  }
}

export default App;


