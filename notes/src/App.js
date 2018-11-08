



// import React, { Component } from 'react';
// import './App.css';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
// import Form from './components/Form';
// import YourNotes from './components/Notes';
// import Note from './components/Note';
// import EditNote from './components/Edit';


// const blankItem = {
//   tag: '',
//   title: '',
//   textBody:''
// };


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: [],
//       note: {
//         tag: '',
//         title: '',
//         textBody: '',
//       },
//       editingID: null,
//       activeNote: null,
//       isEditing: false,
//     }
//   }

//   componentDidMount() {
//     axios
//       .get('https://fe-notes.herokuapp.com/note/get/all')
//       .then(response => this.setState({ notes: response.data }))
//       .catch(error => console.log(error));

//   }

//   getNotesById = id => {
//     axios
//       .get(`https://fe-notes.herokuapp.com/note/get/:${id}`)
//       .then(response => 
//         {console.log(id)
//         this.setState({ activeNote: response.data })})
//       .catch(err => console.log(err));
//   };

//   changeHandler = ev => {
//     this.setState({
//       note: {
//         ...this.state.note,
//         [ev.target.name]: ev.target.value
//       }
//     });
//   };

//   addNote = () => {
//     axios
//       .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
//       .then(response => {
//         this.setState({ notes: response.data });
    
//       })
//       .catch(error => console.log(error));
//   };

//   deleteNote = (ev, id) => {
//     ev.preventDefault();
//     axios
//       .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
//       .then(response => {
//         this.setState({ notes: response.data });
    
//       })
//       .catch(error => console.log(error));
//   };

//   updateNote = () => {
//     axios
//       .put(
//         `https://fe-notes.herokuapp.com/note/edit/${this.state.editingId}`, this.state.note)
//       .then(response => {
//         this.setState({
//           notes: response.data,
//           editingId: null,
//           isEditing: false,
//           note: blankItem,
//         });
//       })
//       .catch(error => console.log(error));
//   };

//   setUpUpdateForm = (ev, note) => {
//     ev.preventDefault();
//     this.setState({
//       note,
//       isEditing: true,
//       editingId: note.id
//     });
//   };

//   render() {
//     return (
      
//       <div className='container'>
//         <div className="App">
//           <div className="side-bar">
//             <div className='lambda-notes'>
//               <h1>Lambda</h1>
//               <h1> Notes</h1>
//             </div>
//             <NavLink exact to='/'>
//             <button className='side-button'>View Your Notes</button>
//             </NavLink>
//             <NavLink to='/create-new-note'>
//             <button className='side-button'>+Create New Note</button>
//             </NavLink>
//           </div>
          
//             <Route exact path='/' 
//             render={props =><YourNotes {...props}
//             notes={this.state.notes}
//             getNotesById={this.getNotesById}
//             /> }/>

//             <Route path='/create-new-note'
//             render={props => <Form {...props} 
//             updateNote={this.updateNote} 
//             addNote={this.addNote}
//             changeHandler={this.changeHandler} 
//             note={this.state.note}
//             isEditing={this.state.isEditing}/> }/>

//             <Route path='/notes/:id' 
//             render={props => (<Note {...props} 
//             updateNote={this.setUpUpdateForm} 
//             deleteNote={this.deleteNote}
//             note={this.state.activeNote}/>)}/>

//              <Route path='/edit'
//             render={props => <Form {...props} 
//             updateNote={this.updateNote} 
//             changeHandler={this.changeHandler} 
//             note={this.state.note}
//             /> }/>


//         </div>
//       </div>
//     );
//   }
// }
// export default App;



import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Form from './components/Form';
import YourNotes from './components/Notes';
import Note from './components/Note';
import Edit from './components/Edit';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newNote: {
        tag: '',
        title: '',
        textBody: '',
      }
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))

  }


  addNote = (event, newNote) => {
    event.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        newNote._id = response.data.success;
        this.setState({ notes: [newNote, ...this.state.notes] })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))
  }
  

  render() {
    return (
      
      <div className='container'>
        <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
            <NavLink exact to='/'>
            <button className='side-button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new-note'>
            <button className='side-button'>+Create New Note</button>
            </NavLink>
          </div>
          
            <Route
            path exact='/'
            render={props =>
            <YourNotes {...props}/> 
          }/>

          <Route
          path='/create-new-note' 
          render={props =>
          <Form {...props} addNote={this.addNote}/> }/>

            <Route 
            path='/note/:id' 
            render={props => 
              <Note 
              {...props}
              />
            }
          />

            <Route
            path='/edit'
            render={props =>
            <Edit {...props}/> 
          }/>

        </div>
      </div>
    );
  }
}
export default App;