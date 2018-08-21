import React, { Component } from 'react';
import axios from 'axios';
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
      title: '',
      content: '',
      selected: {},
      remove: false
    }
  }

  // Lambda View

  componentDidMount() {
    axios.get('http://localhost:8000/notes').then(res => {
      console.log('res', res)
      this.setState({notes: res.data})
    }).catch(err => {
      console.log(err)
    })
  }

  handleSetData = data => this.setState({ notes: data})



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
        <Route path="/" component={LambdaNav}/>
        <Route exact path="/" render={props => (<LambdaNotes {...props} notes={this.state.notes} />)} />
        <Route path="/form" render={props => (<LambdaForm {...props}  />)} />
        <Route path="/edit/:id" render={props => (<LambdaEdit {...props} notes={this.state.notes} handleSetData={this.handleSetData} />)} />
        <Route path="/notes/:id" render={props => (<LambdaView {...props} note={this.state.notes} toggleDelete={this.toggleDelete} />)} />
        {this.state.remove ? (<Route path="/notes/:id" render={props => (<LambdaDelete {...props} handleSelectNote={this.handleSelectNote} toggleDelete={this.toggleDelete} />)} />) : null}
      </StyledContainer>
    )
  }
} 

export default App;


