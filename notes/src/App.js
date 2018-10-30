import React, { Component } from 'react';
import axios from 'axios';

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';

//page styling
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({
          toDoList: response.data
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <HeadNav />
        <div className='mainView'>
          <ListView />
        </div>

      </div>
    );
  }
}

export default App;
