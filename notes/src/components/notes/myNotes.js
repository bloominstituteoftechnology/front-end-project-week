import React, { Component } from 'react';
import axios from 'axios';
import Note from './note';
import { Mainbar } from '../../style/style';


class MyNotes extends Component {
  state={
    notes:[],
  }

  componentDidMount(){
    axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(res => this.setState({
      notes:res.data
    }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.notes)
    return(
        <Mainbar>
        {this.state.notes.map(note =>{
          return[
          <Note key={note._id} notes={note}/>
          ]
        })}
        </Mainbar> 
    )
  }
}
 
export default MyNotes;