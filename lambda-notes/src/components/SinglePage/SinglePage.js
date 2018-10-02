import React, { Component } from 'react';
import axios from 'axios';

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{

      }]
    };
  }

componentDidMount(){
console.log(this.props)
const id =  this.props.match.params.id;
this.fetchNote(id)

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
  render(){
    return (

    <div className="container">
      <div key ={this.state.notes.id} className='NoteContainer'>
      <h3>{this.state.notes.title}</h3>
      <hr/>
      <p> {this.state.notes.textBody}</p>
      </div>

    </div>
    );

  }




}
