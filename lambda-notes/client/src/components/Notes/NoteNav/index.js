import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Route } from 'react-router-dom';
import ViewNote from '../ViewNote';
import EditNote from '../EditNote';


const NoteRoutes = (props) => {
    console.log('nav props', props)
    //console.log('ids', props.data[0])
    return (
      <div>
        {props.data.notes.map((u, index) => 
        <div>
        <Route exact path={'/Notes/' + index} component={ViewNote} key={u.id}/>
        <Route path ={'/Notes/edit/' + index} component={EditNote} />
        </div>
        )}
      </div>
      //<h1>something</h1>
      //<div>{props.data.notes[0]}</div>
    )
  }
//<Route exact path={'/Notes/' + index} component={ViewNote} />

class NoteNav extends Component {
    constructor() { 
      super()
      this.state = {
        notes: []
      }
    }
    theMount() {
      // axios
      //   .get('http://localhost:5000/api/notes')
      //   .then(response => {
      //     this.setState(() => ({ notes: response.data }));
      //   })
      //   .catch(error => {
      //     console.error('Server Error', error);
      //   });
      let data = JSON.parse(localStorage.getItem("names"))
      this.setState({ notes: data })
    }
    componentDidMount() {
      this.theMount();
    }
  
    render() {
      console.log('nav', this.state)
      return (
          <div className='note__container-bg'>
            <NoteRoutes data={this.state} />
          </div>
      );
    }
  }

  export default NoteNav;