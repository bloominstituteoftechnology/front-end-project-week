import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import  Notes from './Notes';
import Note from './OneNote';
// import CreateNote from './components/CreateNote';
import './App.css';
import {getNotes} from './defaultNotes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []   
  }
} 

componentDidMount() {
  this.setState({notes: getNotes()})
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={props => (
            <Notes {...props} notes={[this.state.notes]} />)}/>
          <Route path="/view-note/:id" component={Note} notes={this.state.notes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

 // <Route path="/create-new-note" component={CreateNote} /> 

// import React, { Component } from 'react';
// import './App.css';
// // import { fetchTodos, createTodo } from './actions';
// import { connect } from 'react-redux';
// import { getNotes } from "./defaultNotes";
// import DisplayNotes from './DisplayNotes'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SideBar from "./sidebar";
// import NoteCard from "./card";


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: getNotes(),
//       view: "list",
//     }}; 

//     render() {
//       return (
//         <Router>
//           <div className="App">
//           <SideBar/>
//           <Route exact path="/" component={DisplayNotes}/>
//           {/* <Route path="/Notes/:id" component={NoteCard} /> */}
//           {/* <Route
//             render={routeProps => (
//               <SingleNote
//                 {...routeProps}
//                 {...this.props}
//                 notes={this.state.notes}
//               />
//             )}
//             path="/note/:id"
//           /> */}
//           </div>
//         </Router>
//       );
//     }
//   }

// export default App;


