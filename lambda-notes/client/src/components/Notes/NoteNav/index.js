import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Route } from 'react-router-dom';
import ViewNote from '../ViewNote';


const NoteRoutes = (props) => {
    console.log('props', props)
    //console.log('ids', props.data[0])
    return (
      <div>
        {props.data.map((u, index) => 
        <Route exact path={'/Notes/' + index} component={ViewNote} key={u.id}/>
        )}
      </div>
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
            <NoteRoutes data={this.state.notes} />
          </div>
      );
    }
  }

  export default NoteNav;