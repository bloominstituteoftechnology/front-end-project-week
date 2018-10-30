import React, { Component } from 'react';
import './App.css';

import SideMenu from './components/SideMenu';
import data from './data';
import axios from 'axios';

import { Route } from 'react-router-dom';
import DisplayNoteList from './components/DisplayNoteList';
import DisplayNote from './components/DisplayNote';
import AddNoteForm from './components/AddNoteForm';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
    notes: [],
    idCount : 1000,
    };

    this.submitAdd = this.submitAdd.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    }
    

    componentDidMount() {
      // this.setState({ notes: data });

      axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
 
      }


      submitAdd = (note) =>{
        // this.setState({idCount : this.state.idCount +1})
        // note._id = String(this.state.idCount);
        // this.setState({notes : [...this.state.notes, note]});
      
        axios.post('https://fe-notes.herokuapp.com/note/create', note)
        .then(response => this.setState({ notes: [...this.state.notes, {...note, _id: response.data.success}] }))
        .catch(error => console.log(error));
        
      }

      submitEdit = (editedNote) => {
   
        // let newNoteList = this.state.notes.filter( note => note._id !== editedNote._id);
        // this.setState({notes : [...newNoteList, editedNote]});
   
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${editedNote._id}`, editedNote)
        .then(response =>{
          let newList = this.state.notes.filter(note => note._id !== response.data._id);
          this.setState({ notes: [...newList, response.data] });
        } )
        .catch(error => console.log(error));
      }

      submitdelete = (deleteId) => {
   
        // let newNoteList = this.state.notes.filter( note => note._id !== deleteId);
        //  this.setState({notes : [...newNoteList]});
 
         axios.delete(`https://fe-notes.herokuapp.com/note/delete/${deleteId}`)
        .then(response =>{
            let newNoteList = this.state.notes.filter( note => note._id !== deleteId);
             this.setState({notes : [...newNoteList]});
          } )
        .catch(error => console.log(error));

      }


  render() {
    return (
      <div className="App">
        <SideMenu />
       
        <Route
                    exact
                    path="/"
                    render={props => (
                        <DisplayNoteList  {...props}  notes={this.state.notes}  />
                    )}
                    />


         <Route     exact
                    path="/edit/:id"
                    render={props => (
                    <EditNote {...props} 
                         notes={this.state.notes}
                        submitEdit={this.submitEdit}
                      />
                    )}
                    />


        <Route      
                    path="/Notes/:id"
                    render={props => (
                    <DisplayNote {...props} 
                         notes={this.state.notes}
                       />
                    )}
                    />

  <Route            exact
                    path="/Notes/:id/delete"
                    render={props => (
                    <DeleteNote {...props} 
                         notes={this.state.notes}
                        
                         submitdelete={this.submitdelete}/>
                    )}
                    />



        <Route
                   exact
                    path="/addNote"
                    render={props => 
                    <AddNoteForm {...props} 
                        submitAdd={this.submitAdd}/>}
                    />
      </div>
    );
  }
}

export default App;
