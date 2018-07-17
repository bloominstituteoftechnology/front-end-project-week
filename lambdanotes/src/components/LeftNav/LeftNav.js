import React, { Component } from 'react'
import './index.css';

export default class LeftNav extends Component {
  render() {
    return (
      <div className='nav-container'>
        <div>
          <h1 className='nav-header'>Lambda Notes</h1>
        </div>
        <div className='nav-button-container'>
          <button type='button' className="btn btn-large custom-button text-white">View Your Notes</button><br />
          <button type='button' className="btn btn-large custom-button text-white">+ Create New Note</button>
        </div>
      </div>
    )
  }
}
