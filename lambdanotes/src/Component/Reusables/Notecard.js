import React, { Component } from 'react';
import Styles from '../../Styles/Notecard.css';

export default class Notecard extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
        <h5 class="card-title">title here</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    )
  }
};
