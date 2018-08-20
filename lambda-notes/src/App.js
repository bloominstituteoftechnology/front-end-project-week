import React, { Component } from 'react';
import './App.css';
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
      selected: {},
      remove: false
    }
  }

  // Lambda View

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddnote = e => {
    const notes = this.state.notes.slice();
    notes.push({ title: this.state.title, body: this.state.body, id: Date.now() });
    this.setState({ notes, title: '', body: '' });
  }

  handleSelectNote = id => {
    this.setState({ selected: id });
  }

  //Lambda Edit
  handleTitle = e => {
    this.setState({
      selected: {
        id: this.state.selected.id,
        title: e.target.value,
        content: this.state.selected.body
      }
    })
  }

  handleBody = e => {
    this.setState({
      selected: {
        id: this.state.selected.id,
        title: this.state.selected.title,
        body: e.target.value
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
          content: this.state.selected.body
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
        <Route path="/form" render={props => (<LambdaForm {...props} title={this.state.title} body={this.state.body} handleAddnote={this.handleAddnote} handleChange={this.handleChange} />)} />
        <Route path="/edit/:id" render={props => (<LambdaEdit {...props} notes={this.state.notes} selected={this.state.selected} handleTitle={this.handleTitle} handleBody={this.handleBody} handleSelectNote={this.handleSelectNote} handleEditNote={this.handleEditNote} />)} />
        <Route path="/notes/:id" render={props => (<LambdaView {...props} note={this.state.notes} toggleDelete={this.toggleDelete} />)} />
        {this.state.remove ? (<Route path="/notes/:id" render={props => (<LambdaDelete {...props} handleSelectNote={this.handleSelectNote} handleDeleteNote={this.handleDeleteNote} />)} />) : null}
      </StyledContainer>
    )
  }
} 

export default App;


