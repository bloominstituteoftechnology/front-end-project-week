import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class ViewNote extends Component {
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

    deleteNote = () => {
      return alert("Note has been Deleted");
    }

    render() {
        //console.log('state-notes', this.state)
 //       const { title, body } = this.state.note;
      return (
        <div className='View__note'>
          <div className='View__note-links'>
            <Link to={'./edit/' + this.idHolder()}><span> edit </span></Link>
            <span
            onClick={this.deleteNote}> delete </span>
          </div>
          <div>
            <h1>View Note:</h1>
            <h1>{this.state.note.title} </h1>
            <p>{this.state.note.body}</p>
          </div>
        </div> // container div end
        
      );
    }
  }

  export default ViewNote;