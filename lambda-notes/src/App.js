import React, { Component } from 'react';
import axios from 'axios';
import { Route} from 'react-router-dom';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response); 
        this.setState({notes: response.data}) 
      })
      .catch(err => console.log(err));
      
  }


  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Route 
              exact 
              path="/"
              render={props => {
              return (
              <div>
                <Notes {...props} notes={this.state.notes} />
              </div>
              );
            
            }} />
          </div>
      </div>
    );
  }
}

export default App;
