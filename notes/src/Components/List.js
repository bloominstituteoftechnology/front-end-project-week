import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div class="container">
        <div className="title">Your Notes:</div>
        <div class="card">
          <h4>
            <b>Title</b>
          </h4>
          <p>Body</p>
        </div>
      </div>
    );
  }
}

export default List;
