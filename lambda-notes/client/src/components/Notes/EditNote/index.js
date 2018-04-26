import React, { Component } from 'react';
import './index.css';
//import { Link } from 'react-router-dom';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          note: [],
         // tester: [],
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
      this.setState({ title: data[id].title, body: data[id].body })
      let test = JSON.parse(localStorage.getItem("names"));
      this.setState({ tester: test })
    };

    handleAddNote = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      updateGo = () => {
          let num = this.state.note.id;
          // eslint-disable-next-line
          this.state.tester[num].title = this.state.title;
          // eslint-disable-next-line
          this.state.tester[num].body = this.state.body;

      };

      handleUpdateNote = () => {

            this.updateGo();
             localStorage.setItem("names", JSON.stringify(this.state.tester));
            };



    render() {
        //console.log('edit notes', this.state)
 //       const { title, body } = this.state.note;
      return (
        <div className='View__note'>
          <div>
            <h1>View Note:</h1>
            <input
            type='text' 
            className='Create__note-title'
            name='title'
            value={this.state.title}
            onChange={this.handleAddNote}
            /><br/> <br/>
            {/* <h1>{this.state.title}</h1> */}
            <textarea
            type='text' 
            className='Create__note-body'
            name='body'
            value={this.state.body}
            onChange={this.handleAddNote}
            ></textarea>
            {/* <h1>{this.state.note.title} </h1>
            <p>{this.state.note.body}</p> */}
            <button 
            className='Create__note-button'
            onClick={this.handleUpdateNote}
            >Update</button>
          </div>
        </div> // container div end
        
      );
    }
  }

  export default EditNote;