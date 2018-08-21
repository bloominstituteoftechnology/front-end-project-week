import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import NotesList from './components/noteslist';
import { Route, Link } from "react-router-dom";
import Note from './components/note';
import NoteForm from './components/noteform';
import styled from 'styled-components';
import { runInThisContext } from 'vm';

const Container = styled.div`
  display: flex;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        // {title: '1st Note',
        // note: 'See. We take the corner of the brush and let it play back-and-forth. It\'s a very cold picture, I may have to go get my coat. It’s about to freeze me to death. If you hypnotize it, it will go away.',
        // id: 1,
        // edittoggle: false
        // },
        // {title: '2nd Note',
        // note: 'See. We take the corner of the brush and let it play back-and-forth. It\'s a very cold picture, I may have to go get my coat. It’s about to freeze me to death. If you hypnotize it, it will go away.',
        // id: 2,
        // edittoggle: false
        // }
      ],      
      note: '',
      title: '',
      id: null,
      edittoggle: null,
      count: 1,
      Redirect: false
    }
  }

  // componentDidMount() {
  //   this.setState({Redirect: false})
  // }

  handleTaskChange = event => {
    this.setState({[event.target.name]: event.target.value })
  };

  addHandler = event => {
    event.preventDefault();
    const arr = this.state.notes.slice();
    if (this.state.title && this.state.note) {
      arr.push(
        {
          title: this.state.title,
          note: this.state.note,
          id: Date.now()
        }
      );
      this.setState({ notes: arr, count: this.state.count++, Redirect: true },() => {
        this.setState({Redirect: false})
      }
      )}
  }

  editHandler = event => {
    event.preventDefault();
    this.setState({ title: this.state.title, note: this.state.note})
  }

  deleteHandler = event => {
    event.preventDefault();
    let notes = this.state.slice();
    notes = notes.filter(item => !item.id)
    this.setState({ notes });
  }

  editToggle = () => {
    this.setState({})
  }

  render() {
    console.log(this.state)
    return (
      <Container className="App">
        <NavBar />
        {/* <Route path="/" component={NavBar} /> */}
        <Route exact path="/" render={props => (
          <NotesList {...props} notes={this.state.notes} />
        )}/>
        <Route exact path="/note/:id" render={props => (
          <Note {...props} notes={this.state.notes} />
        )}/>
        <Route path="/form" render={props => (
          <NoteForm {...props} notes={this.state.notes} btntext="Save" handleTaskChange={this.handleTaskChange} addHandler={this.addHandler} Redirect={this.state.Redirect}/>
        )}/>
      </Container>
    );
  }
}

export default App;
