import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import {Route} from "react-router-dom";
import axios from 'axios'

import Home from './component/Home'
import ListNotes from './component/ListNotes'
import CreateNote from './component/CreateNote'
import Noteview from './component/Noteview'
import NavBar from './component/NavBar'

import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      notes : [],
      note : [],
      noteUpdate :[],
      title : '', 
      textBody: '',

    
    }

  }
  
  handleInputChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
    ev.preventDefault();
  };
 
  handleCreateNote = (ev) => {
    ev.preventDefault();
      axios
      //.post(`https://fe-notes.herokuapp.com/note/create`,
      //https://witandaynoteserver.herokuapp.com/note/get/3
      //.post(`http://localhost:3111/note/create`,
      .post(`https://witandaynoteserver.herokuapp.com/note/create`,
      {
        title:this.state.title,
        textBody:this.state.textBody
      })
      .then(response => {
        this.setState({notes : response.data[0]}) 
      })
      .catch(err => {
        console.log("IN CATCH", err);
      });
      this.setState({
        title :'',
        textBody :''
      })
     
      window.location.reload();
  };

  handleViewNote = (id) => {
      axios
      //.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      //.get(`http://localhost:3111/note/get/${id}`)
      .get(`https://witandaynoteserver.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(Array.from(response.data)[0]._id)
        this.setState({note : response.data[0]}) 
      })
      .catch(err => {
        console.log("IN CATCH", err);
      });
    
  };
  handleDeleteNote = (id) => {
    
    console.log(id)
    return ()=>{

    
    axios
    //.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    //.delete(`http://localhost:3111/note/delete/${id}`)
    .delete(`https://witandaynoteserver.herokuapp.com/note/delete/${id}`)
    .then(response => {
      this.setState({notes : response.data[0]})
    })
    .catch(err => {
      console.log("IN CATCH", err);
    });
    window.location.reload(); 
};}
  componentDidMount(){
    axios
   // .get(`https://fe-notes.herokuapp.com/note/get/all`)
   // .get(`http://localhost:3111/note/get/all`)
    .get(`https://witandaynoteserver.herokuapp.com/note/get/all`)
    .then(response => {
      this.setState({notes : response.data})
      console.log(this.state.note)
      
    })
    .catch(err => {
      console.log("IN CATCH", err);
    });
  
};
  
  render() {
    return (
      <div className="container">
        <Route  path="/" component={NavBar} />
        <div className="row">
          <div className="col-4">
          <Route  path="/" component={Home} />
          </div>
          <div className="col-8">
          <Route exact path="/Note/New" render={() =>
             <CreateNote
             handleInputChange = {this.handleInputChange}
             handleCreateNote = {this.handleCreateNote }
             />}
             
             />
          <Route exact  path="/"   render={() => 
          <ListNotes 
          notes ={this.state.notes} 
          handleViewNote ={this.handleViewNote}
          />} />
          <Route  path="/Notes/:id" render={props => 
             <Noteview   
             {...props}  note ={this.state.note} notes ={this.state.notes} 
              handleViewNote ={this.handleViewNote} 
              handleInputChange2 = {this.handleInputChange2}
              handleUpdateNote = {this.handleUpdateNote}
              handleDeleteNote  = {this.handleDeleteNote}
              />} />
        </div>
       
       </div></div>
    );
  }

}


export default App;
