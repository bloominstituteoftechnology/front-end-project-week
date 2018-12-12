import React, { Component } from 'react';
import './index.css';
import Form from "./Form";
import NoteListTest from "./NoteListTest";
import {Route} from "react-router-dom";
import View from "./View";
import SideBar from "./SideBar";

class AppTest extends Component {

  render() {
    return (
        <div className="App">
            <SideBar />
       

            <Route path="/note-list" render={ props => (
                <NoteListTest {...props} />
            )}/>

            <Route path="/add-note" render={ props => (
                <Form {...props}/>
            )}/>

            <Route exact path="/note/:id" render={ props => {
                return <View {...props} />
            }}/>

            <Route path="/note/:id/edit" render={ props => {
                return <View {...props}  edit={true} />
            }}/>
        </div>
    );
  }
}


export default AppTest;
