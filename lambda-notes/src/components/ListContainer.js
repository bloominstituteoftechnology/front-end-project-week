import React from 'react';
import List from './List';
import Create from './Create';
import { Route, withRouter } from 'react-router-dom';
import Note from './Note';
import Edit from './Edit';
import axios from 'axios';

class ListContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        displayDelete: false,
        notes: [],
        title: '',
        content: ''
      };
    }

    componentDidMount() {
      this.getNotes();
    };

    getNotes = () => {
      axios
          .get('http://localhost:5000/api/notes')
          .then(res => {
              console.log('Notes Data:', res.data)
              this.setState({ notes: res.data })
          })
          .catch(err => {
              console.log(err);
              this.props.history.push('/notes');
          })
    }

    handleTaskChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleAddNoteSubmit = e => {
      e.preventDefault();
      const title = this.state.title;
      const content = this.state.content;
      const notes = {
        title, content
      }

      axios
        .post('http://localhost:5000/api/create', notes)
        .then(res => {
          this.getNotes();
          this.props.history.push('/notes');
        })
        .catch(err => {
          console.log(err);
        });
    }

    fetchNote = id => {
      const filterNote = this.state.notes.filter(note => note.id === id);
      return filterNote[0];
    }

    updateNoteHandler = e => {
      e.preventDefault();
      // const notes = this.state.notes.slice();
      // notes.splice({id: this.currentId}, 1, { title: this.state.title, content: this.state.content });
      // this.setState({ notes: notes });

      const title = this.state.title;
      const content = this.state.content;
      const notes = {
        title, content
      }
      
      axios
        .put('http://localhost:5000/api/edit/:id', notes)
        .then(res => {
          this.getNotes();
          this.props.history.push('/notes');
        })
        .catch(err => {
          console.log(err);
        });
    }

    deleteNoteHandler = id => {
      const deleteNote = this.state.notes.filter(note => note.id !== id); 
        return deleteNote;
    }

    showModal = () => {
      this.setState({ displayDelete: this.state.displayDelete });
    }

    render() {
      return (
        <div>
          <Route exact path="/notes" render={(props) => <List {...props} notes={this.state.notes}/>} />
          <Route path="/create" render={(props) => 
            <Create {...props} 
              handleAddNoteSubmit={this.handleAddNoteSubmit} 
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route exact path="/edit/:id" render={(props) => 
            <Edit {...props} 
              updateNoteHandler={this.updateNoteHandler}
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route path="/note/:id" render={(props) => 
            <Note {...props} 
              fetchNote={this.fetchNote} 
              showModal={this.showModal}
              deleteNoteHandler={this.deleteNoteHandler}
            />
          } />
        </div>
        
      );
    } 
  }

  export default withRouter(ListContainer);