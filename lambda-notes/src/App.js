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


  handleSelectNote = id => {
    this.setState({ selected: id });
  }

  //Lambda Edit
  handleTitle = e => {
    this.setState({
      selected: {
        id: this.state.selected.id,
        title: e.target.value,
        content: this.state.selected.content
      }
    })
  }

  handleContent = e => {
    this.setState({
      selected: {
        id: this.state.selected.id,
        title: this.state.selected.title,
        content: e.target.value
      }
    })
  }

  handleEditNote = id => {
    let notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === Number(id)) {
        notes[i] = {
          id: this.state.selected.id,
          title: this.state.selected.title,
          content: this.state.selected.content
        };
      }
    }
    this.setState({ notes, selected: {} });
  }

  //Lambda Delete
  handleDeleteNote = id => {
    let notes = this.state.notes.slice();
    notes = notes.filter(note => note.id !== Number(id));
    this.setState({ notes, selected: {}, remove: !this.state.remove })
  }

  toggleDelete = () => {
    this.setState({ remove: !this.state.remove })
  }

  render() {
    return (
      <StyledContainer>
        <Route path="/" component={LambdaNav}/>
        <Route exact path="/" render={props => (<LambdaNotes {...props} notes={this.state.notes} />)} />
        <Route path="/form" render={props => (<LambdaForm {...props} handleSetData={this.handleSetData} />)} />
        <Route path="/edit/:id" render={props => (<LambdaEdit {...props} notes={this.state.notes} selected={this.state.selected} handleTitle={this.handleTitle} handleContent={this.handleContent} handleSelectNote={this.handleSelectNote} handleEditNote={this.handleEditNote} />)} />
        <Route path="/notes/:id" render={props => (<LambdaView {...props} note={this.state.notes} toggleDelete={this.toggleDelete} />)} />
        {this.state.remove ? (<Route path="/notes/:id" render={props => (<LambdaDelete {...props} handleSelectNote={this.handleSelectNote} handleDeleteNote={this.handleDeleteNote} />)} />) : null}
      </StyledContainer>
    )
  }
} 

export default App;


