import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote:'',
      newTitle:'',
       };
    };
  }
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
     
  }
  viewNoteHandler = event =>  {
    event.preventDefault();
    //this.setState ({newEmail: event.target.value});
   }

   newNoteTitleHandler= event =>  {
    event.preventDefault();
   // this.setState ({newName: event.target.value});
  }

  newNoteBodyHandler= event =>  {
    event.preventDefault();
   // this.setState ({newName: event.target.value});
  }
 
  editedNoteTitleHandler= event =>  {
    event.preventDefault();
   // this.setState ({newName: event.target.value});
  }

  editedNoteBodyHandler= event =>  {
    event.preventDefault();
   // this.setState ({newName: event.target.value});
  }
 


  saveNewNoteHandler = event => {
    event.preventDefault();
    axios     
   // .post( 'http://localhost:5000/friends',  
    {
      name: this.state.newName,
      age: this.state.newAge,
      email: this.state.newEmail

    }
    )
    .then(response => {
    //  this.setState(() => ({ friendList: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    });
    }
    
    editedNoteHandler = event => {
      event.preventDefault();
      axios     
   //   .put(`http://localhost:5000/friends/${id}`,
      {
        name: this.state.newName,
        age: this.state.newAge,
        email: this.state.newEmail
      }
      )
      .then(response => {
     //   this.setState(() => ({ friendList: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
   
      }


  render() {
    return (
      <div className="App">
   
      </div>
    );
  }
}

export default App;


  