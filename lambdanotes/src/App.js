import React, { Component } from 'react';
import ViewNotes from './components/ViewNotes'
import CreateNote from './components/CreateNote'
import './App.css';

class App extends Component {

  componentDidMount(){
    const appData = this.props.data
    appData.actions.fetchNotes();
    
  }

  render() {
    console.log('within render', this.props.data);
    const loading = this.props.data.state.loading
    const status = this.props.data.state.status
    console.log(status);
    // let displayComponent;
    // if(status === 'view'){
    //   displayComponent = <ViewNotes />
    // }else
    //   displayComponent = <CreateNote />

    return (
      <div className="App">
        <div className="sidePanel">
          <h1>Lamba Notes</h1>
          <button>View Your Notes</button>
          <button>+Create New Note</button>
        </div>

        <div className="mainPanel">
          {/* {loading === false 
            ? <ViewNotes /> 
            : <h1>Loading Notes...</h1>} */}
          {loading === true ? <h1>Loading...</h1> : null}
          {status === 'view' ? <ViewNotes /> : <CreateNote />}
        </div>
      </div>
    );
  }
}

export default App;
