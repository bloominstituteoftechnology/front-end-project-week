// import React from "react";
// import { NavLink, Switch, Link, Route } from "react-router-dom";


// const ListView = () => (
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/create" component={Create} />
//   </Switch>
// );

// const Home = () => (
//   <div className="home">
//     <h1>Notes</h1>
//     <p> Blah Blah blah Notes</p>
//   </div>
// );

// const Create = () => (
//   <div className="create">
//     <h1>Create New Note:</h1>
//     <p>
//       title
//     </p>
//     <p>
//      content
//     </p>
//   </div>
// );

 // export default Home; 

 import React, { Component } from "react";
 import "./ListView.css";
 import axios from "axios";
 import { Link } from "react-router-dom";
 import Notes from "./Notes.js";

 class ListView extends Component {
   constructor(props) {
     super(props);
     this.state = { notes: [] };
   }

   //  componentDidMount() {
   //    axios
   //      .get("http://localhost:5000/notes")
   //      .then(response => {
   //        this.setState(() => ({ notes: response.data }));
   //      })
   //      .catch(error => {
   //        console.error("error", error);
   //      });
   //  }
   componentDidMount() {
     this.fetchNotes();
   }
   fetchNotes = () => {
     axios
       .get("http://localhost:5000/notes")
       .then(response => {
         this.setState({ notes: response.data });
       })
       .catch(error => {
         console.error("error", error);
       });
   };
   render() {
     return <div className="listView">
         <div className="note-title"> Your Notes:</div>
         <ul className="note-grid">
           {this.state.notes.map(note => {
             return <div className="note-box">
                 <Notes key={note.id} note={note} />
               </div>;
           })}
         </ul>
       </div>;
   }
 }

 export default ListView;