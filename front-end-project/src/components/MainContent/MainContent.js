import React, { Component } from 'react';
import './index.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route, Switch } from 'react-router-dom';
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
      .get('http://localhost:8000/notes')
      .then(response => this.setState({notes: response.data}))
      .catch(error => console.log(error));
    }
    
    componentDidMount(){
      this.getNotes();
    }

    getNoteView = () => {
   
    axios
    .get('http://localhost:8000/notes/:id')
    .then(response => this.setState({notes: response.data}))
    .catch(error => console.log(error));
    }

    componentWillMount(){
        this.getNoteView();
        let routeId = this.props.match.params.id;
        let matched= this.state.notes.filter((item) => item._id === routeId);
        this.setState({matched});
      }
      
        showModal = () => {
          this.setState({displayDelete: !this.state.displayDelete})
        };

     editNote = () => {
            console.log('hi');
          
          axios
            .put('http://localhost:8000/notes/:id')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          
          componentDidUpdate(){
            this.editNote();
          }

    createNote = () => {
            console.log('hi');
          
          axios
            .post('http://localhost:8000/notes')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          
          componentDidMount(){
            this.createNote();
          }

    deleteNote = () => {
            console.log('hi');
          
          axios
            .delete('http://localhost:8000/notes/:id')
            .then(response => this.setState({notes: response.data}))
            .catch(error => console.log(error));
          }
          
          componentWillUnmount(){
            this.deleteNote();
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