import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
// import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const NoteAPI = {
  notes: [
    { 
      id: 1, 
      title: "Note 1", 
      content: "overflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflowoverflow" 
    },
    { 
      id: 2, 
      title: "Note 2", 
      content: "Null" 
    },
    { 
      id: 3, 
      title: "Note 3", 
      content: "Null" 
    },
    { 
      id: 4, 
      title: "Note 4", 
      content: "Null" 
    },
    { 
      id: 5, 
      title: "Note 5", 
      content: "Null" 
    },
    { 
      id: 6, 
      title: "Note 6", 
      content: "Null" 
    },
  ],
  all: function() { return this.notes},
  get: function(id) {
    const isNote = n => n.id === id
    return this.notes.find(isNote)
  }
}

const ListView = () => (
  <div className="list-view">
  <div>
    <h2>Your Notes:</h2>
    </div>
    <div className="list-view2">
    {
      NoteAPI.all().map(n => (
        <div key={n.id} className="list-view-notes">
          <div className="note-block">
            <Link to={`/list/${n.id}`}>
              <div className="note-block-title">
                {n.title}
              </div>
              <div className="note-block-content">
                {n.content}
              </div>
            </Link>
          </div>
        </div>
          ))
    }
    </div>
  </div>
)

// class DeleteModal extends Component {
//   constructor(props, context) {
//     super (props, context);

//     this.handleShow = this.handleShow.bind(this);
//     this.handleShow = this.handleClose.bind(this);

//     this.state = {
//       show: false
//     };
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }

//   render() {
//     const Note = (props) => {
//       const note = NoteAPI.get(
//         parseInt(props.match.params.id, 10)
//       )
//       if (!note) {
//         return <div>Sorry, but the note was not found</div>
//       }
//       return (
//         <div className="full-view">
//           <div className="full-view-links">
//             <Link to='/editnote'>edit</Link>
//             <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>delete</Button>
            
//             <Modal show={this.state.show} onHide={this.handleClose}>
//               <Modal.Header closebutton>
//               </Modal.Header>
//               <Modal.Body>
//                 <p>Are you sure you want to delete this?</p>
//                 <Button onClick={this.handleClose}>Delete</Button>
//                 <Button onClick={this.handleClose}>Close</Button>
//               </Modal.Body>
//               <Modal.Footer>
//               </Modal.Footer>
//             </Modal>
//           </div>
//           <h2>{note.title}</h2>
//           <p>{note.content}</p>
//           <Link to='/list'>Back</Link>
//         </div>
//       )
//     }
//   }
// }

const Note = (props) => {
  const note = NoteAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!note) {
    return <div>Sorry, but the note was not found</div>
  }
  return (
    <div className="full-view">
      <div className="full-view-links">
        <Link to='/editnote'>edit</Link>
        {/* <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>delete</Button> */}
        <Link to='/editnote'>delete</Link>
      </div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <Link to='/list'>Back</Link>
    </div>
  )
}

const Routes = () => (
  <Switch>
    <Route exact path='/list' component={ListView}/>
    <Route path='/list/:id' component={Note}/>
  </Switch>
)

const NewNote = () => (
  <div>
    <h2>Create New Note:</h2>
    <form className="new-note-title">
      <input
      id="noteTitle"
      type="text"
      label="Title"
      placeholder="Note Title"
      />
    </form>
    <form className="new-note-content">
      <input
      id="noteContent"
      type="text"
      label="Content"
      placeholder="Note Content"
      />
    </form>
    <button><Link to='/list'>Save</Link></button><br/>
  </div>
)

const EditNote = () => (
  <div>
    <h2>Edit Note:</h2>
    <form className="new-note-title">
      <input
      id="noteTitle"
      type="text"
      label="Title"
      placeholder="Note Title"
      />
    </form>
    <form className="new-note-content">
      <input
      id="noteContent"
      type="text"
      label="Content"
      placeholder="Note Content"
      />
    </form>
    <button><Link to='/list'>Update</Link></button><br/>
  </div>
)

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ListView}/>
      <Route path='/list' component={Routes}/>
      <Route path='/newnote' component={NewNote}/>
      <Route path='/editnote' component={EditNote}/>
    </Switch>
  </main>
)

const LeftNav = () => (
  <header>
    <nav>
      <h1>Lambda<br/>Notes</h1>
      <button><Link to='/list'>View Your Notes</Link></button><br/>
      <button><Link to='/newnote'>+ Create New Note</Link></button>
    </nav>
  </header>
)

const App = () => (
  <div className="main">
    <LeftNav />
    <Main />
  </div>
)

export default App;