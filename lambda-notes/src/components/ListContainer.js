import React from 'react';
import List from './List';
import Create from './Create';
import { Route } from 'react-router-dom';
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
    };

    handleTaskChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleAddNoteSubmit = e => {
      e.preventDefault();
    }

    handleTaskChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleAddNoteSubmit = e => {
      e.preventDefault();
      const list = this.state.notes.slice();
      list.push({ title: this.state.title, content: this.state.content, id: this.currentId + 1, completed: false });
      this.setState({ list: list });
    }

    fetchNote = id => {
      const filterNote = this.state.notes.filter(note => note.id === id); //delete is reverse of this, use !==
      return filterNote[0];
    }

    updateNoteHandler = e => {
      e.preventDefault();
      const list = this.state.list.slice();
      list.splice({id: this.currentId}, 1, { title: this.state.title, content: this.state.content, id: this.currentId + 1, completed: false });
      this.setState({ list: list });
    }

    deleteNoteHandler = id => {
      const deleteNote = this.state.list.filter(note => note.id !== id); 
        return deleteNote;
    }

    showModal = () => {
      this.setState({ displayDelete: !this.state.displayDelete });
    }

    render() {
      return (
        <div>
          <Route exact path="/notes" render={(props) => <List {...props} notes={this.state.notes}/>} />
          {/* <Route exact path= '/notes' component={List} /> */}
          <Route path="/create" render={(props) => 
            <Create {...props} 
              handleAddNoteSubmit={this.handleAddNoteSubmit} 
              handleTaskChange={this.handleTaskChange} 
              title={this.state.title} 
              content={this.state.content}
            />
          } />
          <Route path="/edit" render={(props) => 
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

  export default ListContainer;