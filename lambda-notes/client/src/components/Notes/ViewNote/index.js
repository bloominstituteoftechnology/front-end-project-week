import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: []
        }
    }
    componentDidMount() {
      let meow = window.location.href;
      meow = meow.split('').splice(21).join('').replace ( /[^0-9]/g, '' );
      meow = Number(meow);
      let id = meow;
      //if (meow === 0) id = meow;
      this.fetchNote(id);
    }
  
    fetchNote = id => {
      axios
        .get(`http://localhost:5000/api/notes/${id}`)
        .then(response => {
          this.setState(() => ({ note: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    };

    render() {
        console.log('state-notes', this.state)
 //       const { title, body } = this.state.note;
      return (
        <div className='View__note'>
        <h1>View Note:</h1>
        <h1>{this.state.note.title} </h1>
        <p>{this.state.note.body}</p>
            
        </div> // container div end
        
      );
    }
  }

  export default ViewNote;