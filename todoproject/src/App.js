import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import ViewNote from './createnote/viewnote';
import CreateNote from './createnote/createnote';
import EditNote from './editnote/editnote';
import ListItems from './createnote/listitems';
import ListView from './createnote/listview';
import MyFilteredNote from './createnote/individualnotes';


const initialState = [
  {id: 1,
  title: "Note 1",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  {id: 2,
  title: "Note 2",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  {id: 3,
  title: "Note 3",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  {id: 4,
  title: "Note 3",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  {id: 5,
  title: "Note 3",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
  {id: 6,
  title: "Note 3",
  content: "Some quick example text to build on the card title and make up the bulk of the card's content."},
]

class App extends Component {
  constructor() {
    super();
    this.state = {
        todos: initialState,
        todo: '',
    };
}
handleEventChange = event => {
this.setState({ [event.target.name]: event.target.value })
};

handleSubmit = () => {
const todos = this.state.todos;
const todo = {
    id: this.state.todo + todos.length,
    title: this.state.title,
    content: this.state.content,
};

todos.push(todo);
this.setState({ todos: todos, todo: '' })
};


  render() {
    const NoMatch = () => (
      <h3>This page does not exist - Sorry!</h3>
  )
  
    return (
      <div className="App">
      
{/* Routes */}
      <Switch>
          
            <Route path="/EditNote" render={(props) => (
            <EditNote {...props} todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route path="/ViewNote/:id" render={(props) => (
            <ViewNote {...props} deleteNotecard={this.deleteNotecard} todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route path="/CreateNewNote" render={(props) => (
            <CreateNote todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
             <Route exact path="/" render={(props) => (
            <ListView todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route component={NoMatch}></Route>
      </Switch>
            <Route path="/" component={Sidebar}></Route>
      </div>
    );
  }
}

export default App;
