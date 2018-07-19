import React, { Component } from 'react';
import NavBar from './components/app/NavBar' ;
import './App.css';
import Content from './components/app/Content' ;
//import dummyData from './components/app/dummyData' ;
import NotesList from './components/notes/NotesList';

class App extends Component {
  constructor() {
    super() ;
    this.state = {       
        data: [
          {
            "tags": [],
            "_id": 1,
            "title": "Note Title 1",
            "textBody": "Note Body " 
        }

        ]
    }
  }
  
  // componentDidMount(){
  //   this.setState({ 
  //       data: [
  //           {
  //               "tags": [],
  //               "_id": 1,
  //               "title": "Note Title 1",
  //               "textBody": "Note Body " 
  //           }
  //       ]
  //   })
  // }
  addNote = (input) => {
    //alert('im cool');
    //console.log('event from app',input);
    //alert();
    //const newNote = input;
    const data = this.state.data.slice();
    data.push(input);
    //console.log(newState);
    this.setState({ data })
    
    alert(this.state.data.length);
  }

  
  
  render() {
    console.log('state from app',this.state.data);
    alert(this.state.data.length);

    return (
      <div className="App">
        <div className="container">
          <nav className="nav">
          
            <NavBar />

          </nav>
          <div className="page">

            <Content 
              data={this.state.data} 
              addNote={this.addNote} 
            />

          </div>
        </div>        
      </div>
    );
  }

}
export default App;
