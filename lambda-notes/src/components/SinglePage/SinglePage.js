import React, { Component } from 'react';
import * as axios from 'axios';
import { Button } from 'reactstrap';
import './SinglePage.css';
import Modal from './Modal.js';

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      reload:false,
      mounted:true,
      newTitle: '',
      newTextBody:'',
      notes: [{

      }]
    };
  }

componentDidMount(){
console.log(this.props)
const id =  this.props.match.params.id;
this.mounted = true;
if(this.state.mounted){
  this.fetchNote(id)
}
this.setState({
  notes: [{

  }],
  message:'',
})


}

componentWillUnmount(){
this.setState({
    mounted: true
  });
}

fetchNote = id => {
    axios
      .get(`http://localhost:3300/api/notes/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ notes:response.data[0]
        }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


deleteNote = id => event => {
  event.preventDefault();
console.log(id)

axios
.delete(`http://localhost:3300/api/notes/${id}`)
.then(response => {
  console.log("success", response);
  this.setState(
    {
    notes:[],
    message:response.data.success,
  }, );

}, this.props.history.push(`/`),window.location.reload(),
console.log(this.state.message),)
.catch(err => {
  console.log(err)

});

}


toggleModal = () =>{
  this.setState({
    isOpen: !this.state.isOpen
  })
}


  editNote = id => event => {


  const noteTaking = id =>  {
  const note = {

      title: this.state.newTitle,
      content:this.state.newTextBody

  }
    console.log(id);
    return axios.put(`http://localhost:3300/api/notes/${id}`,note)
  };



  event.preventDefault();
  this.setState({
      mounted: false
    });

noteTaking(id)
  .then(response => {
    console.log("success", response);
    this.setState(
      {
      notes:{
        title:response.data.title,
        content:response.data.content
      }
      ,

    },
      () => {
console.log(this.state.message);
        this.props.history.push(`/notes/${id}`),window.location.reload();

      }

    );
  })
  .catch(err => {
    console.log(err)

  })
  }

  render(){
  console.log(this.state.notes);
  const title = this.state.notes.title;
  const content = this.state.notes.content;
    return (


    <div className="Notes">
      <div className='NoteContainer'>
        <div key ={this.state.notes.id} >
        <h3>{title}</h3>
        <hr/>
        <p> {content}</p>
        </div>
      </div>
      <div className="FormContainer">

      <form >
      <div className= 'row'>
        <input className ='TitleInput' placeholder = 'Title' name= 'newTitle' onChange ={this.handleInputChange} value = {this.state.newTitle}/>
      </div>
      <div className= 'row'>
        <input className='textComment' placeholder = 'Content' name= 'newTextBody'  onChange ={this.handleInputChange} value = {this.state.newTextBody}/>
      </div>
      <div className="ButtonContainer">
        <Button  color="success" onClick ={this.editNote(this.state.notes.id)} >Edit Note</Button>
      </div>
      <div className="ButtonContainer">
        <Button  color="danger" onClick ={this.toggleModal} >Delete Note</Button>
      </div>

      </form>

      <Modal show={this.state.isOpen}
                onClose={this.toggleModal}
                deleteNote={this.deleteNote}
                id={this.state.notes.id} >
                Are you sure you want to delete this note?
              </Modal>
      </div>



    </div>
    );

  }




}
