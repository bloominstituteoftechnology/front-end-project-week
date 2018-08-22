import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



const DisplayNotes = (props) => {
  console.log(props.dev[0]);
  return (
    <div className="DisplayNotes_Container">
      {props.dev.map(notes =>
        <div key={notes._id} className="DisplayNotes-Card">
          <h1>{notes.title}</h1>
          <h4>{notes.textBody}</h4>
        </div>
      )}
    </div>
  )
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      dev: []
    }
  }
  componentDidMount() {
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(responce => {
      this.setState( { dev: responce.data } );
    }).catch(err => console.log(err));
  }

  render() {
    if (this.state.div === []) {
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div className="container"> {/* container div */}

          <div className="App_Top"> {/* top div */} 
          <div className="App_Top-Button">
            <span>View Notes</span>
          </div>
          <div className="App_Top-Button">
            <span>New Note</span>
          </div>
          </div> {/* top div end */}

          <div className="App_Bottom"> {/* bottom div */} 
            <DisplayNotes dev={this.state.dev} test="hello"/>
          </div> {/* bottom div end */}

        </div> /* container end */
      );
    }
  }
}

export default App;
