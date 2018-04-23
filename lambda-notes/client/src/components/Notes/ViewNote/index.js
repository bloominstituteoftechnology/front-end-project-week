import React, { Component } from 'react';
import axios from 'axios';
import './index.css';


class ViewNote extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        console.log('props', this.props)
      return (
        <div className='View__note'>
        <h1>View Note:</h1>
        <h1>{this.props.name} </h1>
        <p>{this.props.body}</p>
            
        </div> // container div end
        
      );
    }
  }

  export default ViewNote;