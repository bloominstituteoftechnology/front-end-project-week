import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
          title: [],
          body: [],
          notes: [],
        }
    }
    componentDidMount() {
      let data = JSON.parse(localStorage.getItem("note data string"))
      this.setState({ notes: data })
    }
    idGen = () => {
   let id = this.state.notes.length;
   return id;
  //   const something = function() {
  //    ++id
  //    return id;
  //    return something();
  //  }
    }
    handleAddNote = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    NewNote = () => {
      let obj = {
        id: this.idGen(),
        title: this.state.title,
        body: this.state.body
      }
      this.state.notes.push(obj);
    }
    AddNote = () => {
      // axios.post(`http://localhost:5000/api/notes/`, {
      //       "id": ++id,
      //       "title": this.state.title,
      //       "body": this.state.body
      //   })
      //   .then(response => {
      //  //   this.setState(() => ({ movie: response.data }));
      //  console.log('check postman and all other sources')
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    };
    handleSubmitNote = () => {
//     const { title, body } = this.state;
//     title.push(this.state.title);
//     body.push(this.state.body);
//     this.AddNote();
     this.NewNote();
     this.setState({ title: ""});
     this.setState({ body: ""});
     localStorage.setItem("names", JSON.stringify(this.state.notes));
    };

    render() {
      console.log('state', this.state)
      console.log('idgen', this.idGen())
      return (
        <div className='Create__note'>
        <h1>Create New Note:</h1>
        <input
        type='text' 
        placeholder="Note Title"
        className='Create__note-title'
        name='title'
        value={this.state.title}
        onChange={this.handleAddNote}
        /> <br/> <br/>
        <textarea
        type='text' 
        placeholder="Note Body"
        className='Create__note-body'
        name='body'
        value={this.state.body}
        onChange={this.handleAddNote}
        ></textarea><br/> <br/>
        <button 
        className='Create__note-button'
        onClick={this.handleSubmitNote}
        >Save</button>
          
  
        </div> // container div end
        
      );
    }
  }

  export default CreateNote;