import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      formShow: false,
      title: '',
      textBody:''
    }

  }


  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      })

  }
  formshowButton= (event) => {
    event.preventDefault();
    this.setState({formShow:!this.state.formShow})
    
  }
  

  // handleSubmit = event => {
  //   event.preventDefault();

    // const note = {
    //   note: this.state.note
    // };
// }

    
  

    handleChange = event => {
      this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event => {
      event.preventDefault();

      const newNote = {
        title:this.state.title,
        textBody:this.state.textBody
         
      };
        axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(res => {
        this.setState({
          notes: [...this.state.notes, {...newNote, _id: res.data.success}]
        })
      })
      .catch(error=>{
        console.log('error99')
      })
    }
    deleteHandle = id => {
      axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        axios.get('https://fe-notes.herokuapp.com/note/get/all')
        .then(res =>{
          this.setState({
            notes: res.data
          })
      
          })
          .catch(error => {
            console.log('error100')
        })
      })
      .catch(error =>{
        console.log('error101')
      })
    }

  //     render()
  //     return (
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <label>
  //             New Note:
  //                   <input type='text' note='title, content' onChange={this.handleChange} />
  //           </label>
  //           <button type='submit'>Add</button>

  //         </form>
  //       </div>
  //     )
  //   }


  // }
  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <div className='sidebar'>
          <h1>Lambda Notes</h1>
          <button>View Your Notes</button>
          <button onClick={this.formshowButton}>+ Create New Note</button>
        </div>
        <div className={this.state.formShow ? 'form-showing' : 'form-notshowing'}>
          <form onSubmit={this.handleSubmit}>
            <input name='title' value={this.state.title} onChange={this.handleChange}></input>
            <input name='textBody' value={this.state.textBody} onChange={this.handleChange}></input>
            <button type = 'submit'>Submit</button>
          </form>
        </div>

        {this.state.notes.map(note => {
          return (
            <div className='notes' key={note._id}>
          
              <div>{note.title}</div>
              <div>{note.textBody}</div>
              <button>edit</button>
              <button onClick={() => {this.deleteHandle(note._id)}}>delete</button>
            </div>

          )
        })}
      </div>
    );
  }
}

export default App;
