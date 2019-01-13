import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import Nav from "./Nav Links/Nav";
import styled from 'styled-components'
const AppHolder = styled.div`
  width: 880px; 
  height: 100%; 
`;
const NavHolder = styled.div`
  display: flex; 
  justify-content: flex-start; 
`;

// const URL = "http://localhost:3001/notes"; 

class App extends Component {
  constructor(App) {
    super(App);
    this.state = {
      // notes: [],
      // deleting: false,
      // title: "",
      // content: "",
      // tags: "",
      // id: null,
      // completed: false
    };
  }
  // componentDidMount(){
  //   axios
  //     .get("http://localhost:3001/notes")
  //     .then(res => {
  //       this.setState({notes : res.data});
  //     })
  //     .catch(err => console.log('error', err))
  // }

  // addNote = () => {
  //   const newNote = {
  //     title: this.state.title, 
  //     content: this.state.content,
  //   }; 
  //   axios
  //     .post("http://localhost:3001/notes", newNote)
  //     .then(res => {
  //       this.setState({
  //         id: '', 
  //         title: '', 
  //         content: '',
  //       })
  //       .then(res => {
  //         this.props.history.push('/notes')
  //       }); 
  //     })
  //     .catch(err => console.log(err)); 
  // };

  // inputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // deleteBox = () => {
  //   let deleting = !this.state.deleting;
  //   this.setState({ deleting });
  // };

  // deleteNote = id => {
  //     axios
  //       .delete(`${URL}/${id}`)
  //       .then(response => {
  //         axios.get(`${URL}`).then(response => {
  //           this.setState({
  //             notes: response.data,
  //           });
  //         })
  //       })
  // };

  // complete = () => {
  //   let completed = !this.state.completed;
  //   this.setState({ completed });
  // };
  // completeNote = id => {
  //   let copiedNote = this.state.notes.slice();
  //   let noteComplete = copiedNote.filter(note => note.id !== id);
  //   this.setState({ notes: noteComplete, completed: false });
  // };

  render() {
    return (
      <AppHolder>
        <NavHolder>
          <Nav />
        </NavHolder>
      </AppHolder>
    );
  }
}

export default App;
