import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
      this.state = {
        notes: []
      };
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }




  render() {
    return (
      <div className="App">
        
        {this.state.notes.map(each => (
          <Notes key={each.id} note={each} />
        ))}
      </div>
    );
  }
}


function Notes(props){
  return (
    <div>{props.note.textBody}</div>
  )
} 




export default App;
