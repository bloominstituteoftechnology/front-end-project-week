import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListView from './listview/listview';
import Sidebar from './sidebar/sidebar';
import ViewNote from './viewnote/viewnote';
import CreateNote from './createnote/createnote';
import EditNote from './editnote/editnote';
import DeleteNote from './deletenote/deletenote';
import ListItems from './createnote/listitems';


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
            <Route exact path="/" component={ListView}></Route>
            <Route path="/ViewYourNotes" component={ViewNote}></Route>
            <Route path="/CreateNewNote" render={(props) => (
            <CreateNote todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route path="/EditNote" component={EditNote}></Route>
            <Route path="/ViewNote" component={ViewNote}></Route>
            <Route path="/DeleteNote" component={DeleteNote}></Route>
            <Route component={NoMatch}></Route>
      </Switch>
            <Route path="/" component={Sidebar}></Route>
      </div>
    );
  }
}

export default App;
