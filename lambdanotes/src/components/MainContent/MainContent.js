import React, { Component } from 'react';
import './MainContent.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route } from 'react-router-dom';
import axios from 'axios';


class MainContent extends Component {
    constructor() {
        super();
        this.state = {
         notes: [],
      }
    }
    
    getNotes = () => {
      console.log('hi');
    
    axios
      .get('http://localhost:7000/api/notes')
      .then(response => this.setState({notes: response.data}))
      .catch(error => console.log(error));
    }
    
    componentDidMount(){
      this.getNotes();
    }

    getNoteView = () => {
   
    axios
    .get('http://localhost:7000/api/notes/:id')
    .then(response => this.setState({notes: response.data}))
    .catch(error => console.log(error));
    }

      
        showModal = () => {
          this.setState({displayDelete: !this.state.displayDelete})
        };

     editNote = () => {
            console.log('hi');
          
          axios
            .put('http://localhost:7000/api/notes/:id')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          

    createNote = () => {
            console.log('hi');
          
          axios
            .post('http://localhost:7000/api/notes')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          

    deleteNote = () => {
            console.log('hi');
          
          axios
            .delete('http://localhost:7000/api/notes/:id')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          

    render() { 
        return ( 
            <div className='main_container'>
            <Route path='/' exact render={(props)=><NotesList {...props} notes={this.state.notes}/>} />
            <Route path='/note/:id' exact render={(props)=><NoteView {...props} notes={this.state.notes}/>} />
            <Route path='/create' exact render={(props)=><CreateNote {...props} notes={this.state.notes}/>} />
            <Route path='/edit/:id' exact render={(props)=><EditNote {...props} notes={this.state.notes}/>} />
            </div>
         );
    }
}
 
export default MainContent;