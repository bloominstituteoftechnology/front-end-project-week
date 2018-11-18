import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import LambdaNotes from './components/LambdaNotes';
import Notes from './components/Notes';
import MainContainer from './components/styles/MainContainer';
import CreateView from './components/CreateView';

class App extends Component {
constructor(props) {
   super(props);
   this.state ={
      notes:[],
      errorMessage: ''
   }
}
componentDidMount() {
   axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then( response => {
          console.log(response.data)
            this.setState({
                notes: response.data
            })
        })
        .catch( error => {
          this.setState({ errorMessage: "Error: There is some error getting notes"})
          setTimeout( () => {
             this.setState({ errorMessage: null})
          }, 1500)
        }
     )
}

addContent = content => {
    this.setState({
        notes: content.notes
    })
    console.log(content.notes);
}

  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <MainContainer>
          <LambdaNotes />
          <Route exact path='/' render={ props => <Notes {...props} notes={notes}/>}></Route>
          {/* <Notes notes={this.state.notes} /> */}
          <Route path='/createview' render={ props => <CreateView {...props} addContent={this.addContent} notes={notes} />}></Route>
        </MainContainer>
      </div>
    );
  }
}

export default App;
