import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './createnote/sidebar';
import ViewNote from './createnote/viewnote';
import CreateNote from './createnote/createnote';
import EditNote from './editnote/editnote';
import ListItems from './createnote/listitems';
import ListView from './createnote/listview';
import MyFilteredNote from './createnote/individualnotes';
import axios from 'axios';

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

componentDidMount()  {
  axios
  .get("https://vibrant-darwin-54252a.netlify.com/api/notes")
  .then(res => {this.setState({ todos: res.data })})
  .catch(err => {console.log(err)})
 }
//

handleEventChange = event => {
this.setState({ [event.target.name]: event.target.value })
};

handleSubmit = () => {
const todo = {
  title: this.state.title,
  content: this.state.content,
}
axios
.post('https://vibrant-darwin-54252a.netlify.com/api/notes', todo)
.then(res => {
const currentState = this.state.todos;

const freshNote = res.data.savedNote
currentState.unshift(freshNote)
this.setState({ todos: currentState })
})
}


handleEditSubmit (_id) {
  console.log("im submitting")
  const todo = {
    title: this.state.title,
    content: this.state.content,
}
axios
.put(`https://vibrant-darwin-54252a.netlify.com/api/notes/${_id}`, todo)
.then(res => {
  console.log(res)
})
.catch(err => {console.log(err)})
const newState = this.state.todos;

const newNote = newState.filter(item => item._id !== _id)
newNote.unshift(todo)
this.setState({ 
  todos: newNote, 
  todo: '' 
})
};

handleDeleteSubmit (_id) {
const todo = {
    title: this.state.title,
    content: this.state.content,
}
axios
.delete(`https://vibrant-darwin-54252a.netlify.com/api/notes/${_id}`)
.then(res => {
 console.log(res)
})
const keptNotes = this.state.todos.filter(todo => todo._id !== _id)
this.setState({
  todos: keptNotes, 
  todo: '' 
})
}


  render() {
    const NoMatch = () => (
      <h3>This page does not exist - Sorry!</h3>
  )

    return (
      <div className="App">
      
{/* Routes */}
      <Switch>
          
            <Route path="/EditNote/:id" render={(props) => (
            <EditNote {...props} todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleEditSubmit={this.handleEditSubmit.bind(this)}/> 
            )} />
            <Route path="/ViewNote/:id" render={(props) => (
            <ViewNote {...props} handleDeleteSubmit={this.handleDeleteSubmit.bind(this)} todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route path="/CreateNewNote" render={(props) => (
            <CreateNote todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
             <Route exact path="/" render={(props) => (
            <ListView {...props} todos={this.state.todos} handleEventChange={this.handleEventChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
            )} />
            <Route component={NoMatch}></Route>
      </Switch>
            <Route path="/" component={Sidebar}></Route>
      </div>
    );
  }
}

export default App;