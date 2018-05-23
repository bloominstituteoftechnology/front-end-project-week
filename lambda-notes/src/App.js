import React, { Component } from 'react';
import loremipsem from './loremipsem';
import NoteComponent from './components/noteComponent';
import Sidebar from './components/Sidebar/sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesMadeByUser: []
    }
  }

  componentDidMount() {
    this.setState({
      notesMadeByUser: loremipsem
    })
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className= "Notes">
        {this.state.notesMadeByUser.map((note, index)=> {
          return <NoteComponent key={index} note= {note}/>
        })}
        </div>
        
      </div>
    );
  }
}



  

export default App;
