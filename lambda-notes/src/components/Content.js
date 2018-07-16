import React, { Component } from 'react';
import ListView from './ListView'

class Content extends Component {
  render() {
    return (
      <div>
         <h1>Your Notes:</h1>
         <ListView notes={this.props.notes}/>
      </div>
    );
  }
}

export default Content;