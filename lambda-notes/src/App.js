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
  handleDeleteOptions = () => {
    this.setState(() => ({ notesMadeByUser: [] }));
  };

  handleDeleteOption = (noteToRemove) => {
    this.setState((prevState) => ({
      notesMadeByUser: prevState.options.filter((noteMadeByUser) => noteToRemove !== noteMadeByUser)
    }));
  };

  

  componentDidMount() {
    this.setState({
      notesMadeByUser: loremipsem
    })
  }

  render() {
    return (
      <div>
        <Sidebar />
        <NoteComponent 
        notesMadeByUser={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />        
      </div>
    );
  }
}



  

export default App;
