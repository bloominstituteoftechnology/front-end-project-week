import React, { Component } from 'react';



class Notecard extends Component {

  render() {
    return (
      <div>
       <h4>{this.props.note.title}</h4>
       <p>{this.props.note.body}</p>
      </div>
    );
  }
}

export default Notecard;


