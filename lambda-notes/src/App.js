import React, { Component } from 'react';
import './App.css';

//react imports
import { Route } from 'react-router-dom'
import axios from 'axios';


//component docs
import AllNotes from './components/AllNotes';
import MainNav from './components/MainNav'
import NewNote from './components/NewNote';



class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      notes: []
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }
  
  
  
  fetchNotes = () => {
    axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      this.setState({ notes: response.data })
      // console.log(this.state)
    })  
    .catch(error => {
      console.log(error)
    })
  }



  render() {
    return (
      <div className="main_div">
        <div className="main_nav">
          <MainNav />
          <Route exact path = "/" render={props => 
              <AllNotes
                  {...props}
                  notes = {this.state.notes}/>
            }
          />

          <Route path= "/NewNote" 
            render = {
              props => <NewNote
                {...props} fetchNotes={this.fetchNotes}/>
            }/>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
