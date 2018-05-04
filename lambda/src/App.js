import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      notes:[],
    }
  }
  componentDidMount(){
    this.setState({notes :this.props.data});
  }
  
  
  render() {
    return (
      <ul>
         
        {this.state.notes.map(note =>{
          return <li>{note.name}</li>
        })}
          </ul>
    );
  }
}

export default App;
