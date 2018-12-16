import React, { Component } from 'react';
import NotesPage from './components/NotesPage';
import Authenticate from './Authenticate/Authenticate';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
    }
  }

  render () {
    return (
      <NotesPage />
    );
  }
}

export default Authenticate(App)
// import { Route } from 'react-router-dom';
// import axios from 'axios'

// import NavBar from './components/NavBar';
// import NotesList from './components/NotesList';
// import Note from './components/Note';
// import CreateNewNote from './components/CreateNewNote';

// import { AppWrapper } from './style'
// import './App.css'

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       notes: [],
//       filteredSearch: []
//     }
//   }

//   componentDidMount () {
//     axios.get('https://fe-notes.herokuapp.com/note/get/all')
//       .then(res => {
//         console.log(res)
//         this.setState({
//         notes: res.data
//       })})
//       .catch(err => console.log(err))
//   }

//   createNote  = (data) => {
//     axios.post('https://fe-notes.herokuapp.com/note/create/', data)
//     .then(res => {
//       if(res.data.success) {
//         axios.get('https://fe-notes.herokuapp.com/note/get/all')
//         .then(res => {this.setState({
//           notes: res.data
//         })})
//       }
//     })
//       .catch(err=> console.log(err))
      
//   }

//   editNote = ( data, id) => {
//     axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
//     .then(res => {
//        {
//         axios.get('https://fe-notes.herokuapp.com/note/get/all')
//         .then(res => {this.setState({
//           notes: res.data
//         })})
//       }
//     })
//     .catch(err => console.log(err))
//   }

//   deleteNote = id => {
//     axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)

//     .then(res => {
//       if(res.data.success) {
//         axios.get('https://fe-notes.herokuapp.com/note/get/all')
//         .then(res => {this.setState({
//           notes: res.data
//         })})
//       }
//     })
//     .catch(err => console.log(err))
   
//   }

//   handleSearchInput = (event) => {
    
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   getFilteredSearch = () => {
//     const searchFiltered =  this.state.notes.filter(note => {
//       if(note.title.toLowerCase().includes(this.state.filteredSearch.toLowerCase())) {
//           return true
//         }
//         return false
//     }) 
//    return searchFiltered
// }

//   sortedTitle = () => {
//     const sorted = this.state.notes.sort(function(a, b){
//       if(a.title.toLowerCase() < b.title.toLowerCase()){
//         return -1;
//       } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
//         return 1;
//       } else {
//         return 0
//       }
//     })
//     this.setState({
//       notes: sorted
//     })
// }

//   sortRecent = () => {
//     const sorted = this.state.notes.reverse()
//     this.setState({
//       notes: sorted
//     })
//   }

//   render() {
//     const { notes } = this.state;
//     return (
//       <AppWrapper>
//         <NavBar />
        
//         <Route 
//           exact path ='/'
//           render={props =>
//             <NotesList
//               {...props}
//               notes={this.state.filteredSearch.length > 0 ?
//                 this.getFilteredSearch() :
//                 notes}
//               filteredSearch={this.state.filteredSearch}
//               handleSearchInput={this.handleSearchInput}
//               sortTitle={this.sortedTitle}
//               sortRecent={this.sortRecent}
//             />
//           }
//         />

//         <Route
//           exact path ='/note/:id'
//           render={props =>
//             <Note
//               {...props}
//               notes={notes}
//               delete={this.deleteNote}
//             />
//           }
//         />

//         <Route
//           exact path='/create-note'
//           render={props => 
//             <CreateNewNote
//               {...props}
//               createNote={this.createNote}
//             />
//           }
//         />

//         <Route
//           exact path='/edit-note/:id'
//           render={props => 
//             <CreateNewNote
//               {...props}
//               note={notes.map(note => note)}
//               editNote={this.editNote}
//               edit
//             />
//           }
//         />
//       </AppWrapper>
//     );
//   }
// }

// export default App;
