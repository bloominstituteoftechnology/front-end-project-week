import React, { Component } from 'react';
import {connect} from "react-redux";
import './index.css';
import {getNotes,deleteNote} from "./Actions";
import Form from "./Form";
import NoteList from "./NoteList";
import SideBar from "./SideBar";
import {withRouter,Route} from "react-router-dom";
import Note from "./Note";

class App extends Component {


  componentDidMount(){
    this.props.getNotes()
  }

  delete = (event,props) => {
    event.preventDefault();
    
    this.props.deleteNote(props)
    .then(promise => {
      if(promise){
        this.props.getNotes()
        this.props.history.push('/')
      }
    })
  }

  render() {
    return (
      <div className="App">
            <SideBar />
            <div className="main" >
              <Route exact path="/" render={ props => (
                <>
                  <header className="header">Your Notes:</header>
                  <NoteList notes={this.props.notes} {...props}/>
                </>
              )}/>

              <Route path="/add-note" render={ props => (
                <Form {...props}/>
                )}/>

              <Route exact path="/note/:id" render={ props => {
                  
                const id = props.match.params.id;
                const note = this.props.notes.find(note => (
                  id === note._id
                  )
                )
                
                return <Note {...props} {...note} delete={this.delete} view={true}/>
                }
              }/>

              <Route path="/note/:id/edit" render={ props => {

                const id = props.match.params.id;
                const note = this.props.notes.find(note => (
                  id === note._id
                  )
                )

                console.log(this.props.notes)
                return <Form {...props} {...note} edit={true} />
                }}/>
            </div>          
      </div> 
    );
  }
}
const mapStateToProps = state => {
  return {notes:state.notes}
}

export default withRouter(connect(mapStateToProps,{getNotes,deleteNote})(App));
