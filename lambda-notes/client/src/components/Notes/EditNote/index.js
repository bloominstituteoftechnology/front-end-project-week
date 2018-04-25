import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
//import { Link } from 'react-router-dom';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: []
        }
    } 
    idHolder = () => {
      let meow = window.location.href;
      meow = meow.split('').splice(21).join('').replace ( /[^0-9]/g, '' );
      meow = Number(meow);
      let id = meow;
      return id;
    }
    componentDidMount() {
      //if (meow === 0) id = meow;
      this.fetchNote(this.idHolder());
    }
  
    fetchNote = (id) => {
      // axios
      //   .get(`http://localhost:5000/api/notes/${id}`)
      //   .then(response => {
      //     this.setState(() => ({ note: response.data }));
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
      let data = JSON.parse(localStorage.getItem("names"))
      this.setState({ note: data[id] })
    };

    handleAddNote = event => {
        this.setState({ [event.target.name]: event.target.value });
      };



    render() {
        console.log('edit notes', this.state)
 //       const { title, body } = this.state.note;
      return (
        <div className='View__note'>
          <div className='View__note-links'>
            <span
            onClick={this.deleteNote}> delete </span>
          </div>
          <div>
            <h1>View Note:</h1>
            <input
            type='text' 
            className='Create__note-title'
            name='title'
            value={this.state.note.title}
            onChange={this.handleAddNote}
            /><br/> <br/>
            <textarea
            type='text' 
            className='Create__note-body'
            name='body'
            value={this.state.note.body}
            onChange={this.handleAddNote}
            ></textarea>
            <h1>{this.state.note.title} </h1>
            <p>{this.state.note.body}</p>
          </div>
        </div> // container div end
        
      );
    }
  }

  export default EditNote;