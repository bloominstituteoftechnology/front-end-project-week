import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
          notes: [],
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
      this.StatePrep();
    };

    StatePrep = () => {
      let data = JSON.parse(localStorage.getItem("names"))
      this.setState({ notes: data })
    }

    NoteIdRemap = () => {
      let id = this.idHolder(); 
      let holding = this.state.notes
      let pt1 = holding.splice(0, id);
      let pt2 = holding.splice(-id);
      let goal = pt1.concat(pt2);
      for (let i = 0; i < goal.length; i++) {
        goal[i].id = i;
      }
      this.state.notes = goal;
     return goal;
   }

   SaveDeletion = () => {
     let tester = this.NoteIdRemap() //JSON.stringify(this.state.notes);
     //console.log('savedeletion state', tester)
    localStorage.setItem("names", JSON.stringify(this.state.notes));
   }

    deleteNote = () => {
      this.SaveDeletion();
      return alert("Note has been Deleted");

    }

    render() {
        //console.log('state-notes', this.state)
 //       const { title, body } = this.state.note;
        //  console.log('state test', this.state)
        //  console.log('new state', this.state)
        //this.NoteIdRemap();
      return (
        <div className='View__note'>
          <div className='View__note-links'>
            <Link to={'./edit/' + this.idHolder()}><span> edit </span></Link>
            <Link to='/'><span
            onClick={this.deleteNote}> delete </span></Link>
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