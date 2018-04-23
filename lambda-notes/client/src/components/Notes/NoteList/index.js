import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Link, Route } from 'react-router-dom';
import ViewNote from '../ViewNote';


const NoteDisplay = (props) => {
    console.log('props', props)
    return (
      <div className='note__container'>
        {props.data.map((u, index) => 
        <div key={u.id} className='note__container-notes'>
        <Link to={'/Notes/' + index}>
        <h1>{u.title}</h1>
        <p>{u.body}</p>
        <span> {index} </span></Link></div>)}
      </div>
    )
  }
//<Route exact path={'/Notes/' + index} component={ViewNote} />

class NoteList extends Component {
    constructor() {
      super()
      this.state = {
        notes: []
      }
    }
    theMount() {
      axios
        .get('http://localhost:5000/api/notes')
        .then(response => {
          this.setState(() => ({ notes: response.data }));
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    componentDidMount() {
      this.theMount();
    }
  
    render() {
      return (
          <div className='note__container-bg'>
            <h3 className='note__container-h3'>Notes:</h3>
            <NoteDisplay data={this.state.notes} />
          </div>
      );
    }
  }

  export default NoteList;