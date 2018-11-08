



import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Form from './components/Form';
import YourNotes from './components/Notes';
import Note from './components/Note';
import EditNote from './components/Edit';


const blankItem = {
  tag: '',
  title: '',
  textBody:''
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        tag: '',
        title: '',
        textBody: '',
      },
      editingID: null,
      activeNote: null,
      isEditing: false,
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));

  }

  getNotesById = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/id${id}`)
      .then(res => this.setState({ activeNote: res.data }))
      .catch(err => console.log(err));
  };

  changeHandler = ev => {
    this.setState({
      note: {
        ...this.state.note,
        [ev.target.name]: ev.target.value
      }
    });
  };

  addNote = () => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
      .then(response => {
        this.setState({ notes: response.data });
    
      })
      .catch(error => console.log(error));
  };

  deleteNote = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
    
      })
      .catch(error => console.log(error));
  };

  updateNote = () => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.state.editingId}`, this.state.note)
      .then(response => {
        this.setState({
          notes: response.data,
          editingId: null,
          isEditing: false,
          note: blankItem,
        });
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (ev, note) => {
    ev.preventDefault();
    this.setState({
      note,
      isEditing: true,
      editingId: note.id
    });
  };

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
          
            <Route path exact='/' 
            render={props =><YourNotes {...props}
            notes={this.state.notes}
            getNotesById={this.getNotesById}
            /> }/>

            <Route path='/create-new-note'
            render={props => <Form {...props} 
            updateNote={this.updateNote} 
            addNote={this.addNote}
            changeHandler={this.changeHandler} 
            note={this.state.note}
            isEditing={this.isEditing}/> }/>

            <Route path='/notes/:id' 
            render={props => (<Note {...props} 
            updateNote={this.setUpUpdateForm} 
            deleteNote={this.deleteNote}
            notes={this.state.activeNote}/>)}/>


        </div>
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import axios from 'axios';


// import Notes from './components/Notes';
// import Note from './components/Note';
// import Form from './components/Form';
// import './App.css';

// const blankItem = {
//   title: '',
//   textBody: '',
// };

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       notes: [],
//       note: {
//         title: '',
//         textBody: '',
       
//       },
//       editingId: null,
//       activeItem: null,
//       isEditing: false
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://fe-notes.herokuapp.com/note/get/all')
//       .then(response => this.setState({ notes: response.data }))
//       .catch(error => console.log(error));

//   }

//   getNotesById = id => {
//     axios
//       .get(`https://fe-notes.herokuapp.com/note/get/id${id}`)
//       .then(res => this.setState({ activeNote: res.data }))
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

//   addNewItem = () => {
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
//       .delete(`https://fe-notes.herokuapp.com/note/delete/id${id}`)
//       .then(response => {
//         this.setState({ notes: response.data });
    
//       })
//       .catch(error => console.log(error));
//   };

//   updateItem = () => {
//     axios
//       .put(
//         `https://fe-notes.herokuapp.com/note/edit/id${this.state.editingId}`,
//         this.state.note
//       )
//       .then(response => {
//         this.setState({
//           notes: response.data,
//           editingId: null,
//           isEditing: false,
//           note: blankItem
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
//       <div className="App">
//         <nav>
//           <h1 className="store-header">Dustin's Trinkets</h1>
//           <div className="nav-links">
//             <NavLink exact to="/form">
//               {this.state.isEditing ? 'Update Note' : 'Add Note'}
//             </NavLink>
//           </div>
//         </nav>

//         <Route exact path="/" component={Notes} />
//         <Route
//           exact
//           path="/item-list"
//           render={props => (
//             <Notes
//               {...props} 
//               notes={this.state.notes}
//               getNoteById={this.getNoteById}
//             />
//           )}
//         />
//         <Route
//           path="/item-list/:id"
//           render={props => (
//             <Note
//               {...props}
//               deleteNote={this.deleteNote}
//               note={this.state.activeNote}
//               updateNote={this.setUpUpdateForm}
//             />
//           )}
//         />
//         <Route
//           path="/form"
//           render={props => (
//             <Form
//               {...props}
//               addNewItem={this.addNewItem}
//               changeHandler={this.changeHandler}
//               note={this.state.note}
//               isEditing={this.state.isEditing}
//               updateNote={this.updateNote}
//             />
//           )}
//         />
//       </div>
//     );
//   }
// }

// export default App;
