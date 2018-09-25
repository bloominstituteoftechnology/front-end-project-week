
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Note from "./components/Note";
import NewNoteForm from "./components/NewNoteForm";
import EditNote from "./components/EditNote";
import Authenticate from "./Authenticate";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      username: "",
      title: "",
      content: "",
      term: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });

    axios
      .get("http://localhost:2200/api/notes")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
   }
   

  

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  logOut() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  addNote = (event) => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
    };
    axios
    .post(`http://localhost:2200/api/notes`,newNote)
    .then(res => {
      console.log(res);
      axios
      .get("http://localhost:2200/api/notes")
      .then(res => {
      console.log(res.data);
      this.setState({notes: res.data , title: '' , content: ''})
      })
    })
      .catch(error => {
      console.error("Server Error", error);
    })
  }


  deleteNote = (noteID) => {
    axios
    .delete(`http://localhost:2200/api/notes/${noteID}`)
    .then(res => {
      axios
      .get("http://localhost:2200/api/notes")
      .then(res => {
        console.log(res.data);
        this.setState({ notes: res.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    }
    )}


  editNote = (event, noteID ,title, content) => {
    event.preventDefault();

    const editedNote = { title, content };

    axios
      .put(`http://localhost:2200/api/notes/${noteID}`, editedNote)
      .then(res => {
        const editedNote = res.data;

        const notes = this.state.notes.slice();
        for (let i = 0; i < notes.length; i++) {
          if (notes[i].id === editedNote.id) {
            notes[i] = editedNote;
          }
        }

        this.setState({ notes });
        this.props.history.push(`/notes/${noteID}`);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => (
            <Notes
              {...props}
              notes={this.state.notes}
              logOut={this.logOut}
              searchHandler={this.searchHandler}
              term={this.state.term}
            />
          )}
        />
        <Route
          exact
          path="/create-new-note"
          render={props => (
            <NewNoteForm
              {...props}
              title={this.state.title}
              content={this.state.content}
              addNote={this.addNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              title={this.state.title}
              content={this.state.content}
              deleteNote={this.deleteNote}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
        <Route
          exact
          path="/notes/:id/edit"
          render={props => (
            <EditNote
              {...props}
              notes={this.state.notes}
              editNote={this.editNote}
            />
          )}
        />
      </div>
      );
    }
  }

export default withRouter(Authenticate(App));


// import React, { Component } from "react";
// import { Route } from "react-router-dom";
// import axios from "axios";
// import Sidebar from "./components/Sidebar";
// import Notes from "./components/Notes";
// import Note from "./components/Note";
// import NewNoteForm from "./components/NewNoteForm";
// import EditNote from "./components/EditNote";
// import Authenticate from "./Authenticate";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: [],
//       username: "",
//       title: "",
//       text: "",
//       term: ""
//     };
//   }

//   componentDidMount() {
//     const user = localStorage.getItem("user");
//     this.setState({ username: user });

//     axios
//       .get("https://killer-notes.herokuapp.com/note/get/all")
//       .then(response => {
//         this.setState({ notes: response.data });
//       })
//       .catch(error => {
//         console.error("Server Error", error);
//       });
//   }

//   searchHandler = event => {
//     this.setState({ term: event.target.value });
//   };

//   logOut() {
//     localStorage.removeItem("user");
//     window.location.reload();
//   }

//   handleInputChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//     addNote = (event) => {
//     event.preventDefault();
//     const newNote = {
//       title: this.state.title,
//       textBody: this.state.text,
//     };
//     axios
//     .post(`https://killer-notes.herokuapp.com/note/create`,newNote)
//     .then(res => {
//       console.log(res);
//       axios
//       .get("https://killer-notes.herokuapp.com/note/get/all")
//       .then(res => {
//       console.log(res.data);
//       this.setState({notes: res.data , title: '' , text: ''})
//     })
//     })
//       .catch(error => {
//       console.error("Server Error", error);
//     })
//   }


//   deleteNote = (noteID) => {
//     axios
//     .delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
//     .then(res => {
//       axios
//       .get("https://killer-notes.herokuapp.com/note/get/all")
//       .then(res => {
//         console.log(res.data);
//         this.setState({ notes: res.data });
//       })
//       .catch(error => {
//         console.error("Server Error", error);
//       });
//     }
//     )}


//   editNote = (event, noteID, title, textBody) => {
//     event.preventDefault();

//     const editedNote = { title, textBody };

//     axios
//       .put(`https://killer-notes.herokuapp.com/note/edit/${noteID}`, editedNote)
//       .then(res => {
//         const editedNote = res.data;

//         const notes = this.state.notes.slice();
//         for (let i = 0; i < notes.length; i++) {
//           if (notes[i]._id === editedNote._id) {
//             notes[i] = editedNote;
//           }
//         }

//         this.setState({ notes });
//       })
//       .catch(err => console.error(err));
//   };

//   render() {
//     return (
//       <div className="App">
//         <Sidebar />
//         <Route
//           exact
//           path="/"
//           render={props => (
//             <Notes
//               {...props}
//               notes={this.state.notes}
//               logOut={this.logOut}
//               searchHandler={this.searchHandler}
//               term={this.state.term}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/create-new-note"
//           render={props => (
//             <NewNoteForm
//               {...props}
//               title={this.state.title}
//               text={this.state.text}
//               addNote={this.addNote}
//               handleInputChange={this.handleInputChange}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/notes/:id"
//           render={props => (
//             <Note
//               {...props}
//               notes={this.state.notes}
//               title={this.state.title}
//               text={this.state.text}
//               deleteNote={this.deleteNote}
//               handleInputChange={this.handleInputChange}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/notes/:id/edit"
//           render={props => (
//             <EditNote
//               {...props}
//               notes={this.state.notes}
//               editNote={this.editNote}
//             />
//           )}
//         />
//       </div>
//       );
//     }
//   }

// export default Authenticate(App);




























