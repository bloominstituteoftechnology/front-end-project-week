import React, { Component } from 'react';
import axios from 'axios';

class AddNote extends Component {
  

    componentDidMount() {
        this.getNotes();
      }
    
      getNotes = () => {
        axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
          this.setState(() => ({ notes: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }


    handleInputChange = event => {
        this.setState({ 
          [event.target.name]: event.target.value });
        console.log("Changer log:", event.target.value)
      }
    
      adder = event => {
        event.preventDefault();
        
    
        const note = {
            tags: this.state.tags,
            title: this.state.title,
            textBody: this.state.textBody,
        }
        console.log(note);
        axios
          .post('https://killer-notes.herokuapp.com/note/create', note)
          .then(response => window.location.reload() )
          .catch(error => console.log(error))
      };


  render() {
    console.log("addnote:", this.props)
    return (
        
        <div>
        <form onSubmit={this.adder}>
        {/* <input
          onChange={this.handleInputChange}
          placeholder="Tag"
          type="text"
          name="tags"
        /> */}
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Note Title"
          name="title"
        />
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="Note Content"
          name="textBody"
        />
        
        <button type="submit">Save</button>
        
      </form>
      
      </div>
    );
  }
}

export default AddNote;