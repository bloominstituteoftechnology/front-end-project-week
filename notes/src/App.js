import React, { Component } from 'react';
import axios from 'axios';

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditCreate/EditNote';

//page styling
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteList: []
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(({ data }) => {
        this.setState({
          noteList: data
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <HeadNav />
        <div className='mainView'>
          {/* <ListView noteList={this.state.noteList}/> */}
          {/* <NoteView /> */}
          <EditNote />
        </div>

      </div>
    );
  }
}

export default App;
