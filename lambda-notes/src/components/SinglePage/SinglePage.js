import React, { Component } from 'react';
import * as axios from 'axios';
import EditForm from './EditForm.js'

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  }]
})


}

componentWillUnmount(){
this.setState({
    mounted: false
  });
}

fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response)
        this.setState(() => ({ notes: response.data }));
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
.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
.then(response => {
  console.log("success", response);
  this.setState(
    {
    notes:response.data,

  },
    () => this.props.history.push('/')
  );
})
.catch(err => {
  console.log(err)

})

}


  editNote = id => event => {


  const noteTaking = id =>  {
  const note = {

      title: this.state.newTitle,
      textBody:this.state.newTextBody

  }
    console.log(id);
    return axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`,note)
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
      notes:response.data,

    },
      () => this.props.history.push('/')
    );
  })
  .catch(err => {
    console.log(err)

  })
  }

  render(){
    return (

    <div className="container">
      <div key ={this.state.notes._id} className='NoteContainer'>
      <h3>{this.state.notes.title}</h3>
      <hr/>
      <p> {this.state.notes.textBody}</p>
      </div>
      <div className="FormContainer">
      <form >
      <div className= 'row'>
        <input placeholder = 'Title' name= 'newTitle' onChange ={this.handleInputChange} value = {this.state.newTitle}/>
      </div>
      <div className= 'row'>
        <input className='textComment' placeholder = 'Content' name= 'newTextBody'  onChange ={this.handleInputChange} value = {this.state.newTextBody}/>
      </div>
      <button onClick ={this.deleteNote(this.state.notes._id)} >Delete Note</button>
      <button onClick ={this.editNote(this.state.notes._id)} >Edit Note</button>
      </form>


      </div>
    </div>
    );

  }




}
