import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import {saveData } from '../actions.js';



class Poop extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: [],
     text: '',
     title: '',
    }
  }
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSave = () => {
      const newNote = {
            title: this.state.title,
            text: this.state.text,
      }
      this.props.saveData(newNote);
      this.setState({
          text: '',
          title: ''
      })
  }

  render() {
    return (
      <div>
      <div className="columnCenter">  <form>
        <div className="columnA">
            <span className="titleNew">  </span>
              <input className="centerText" type="text" name="title" onChange={this.handleTextChange} placeholder="Title Here" />              
              <input className="centerText" type="text" name="text" onChange={this.handleTextChange} placeholder="Text Here" />
            <Link to="/"><button type="submit" value="Submit" onClick={() => this.handleSave()}>Submit Friend</button></Link>
          </div>
          </form>
          </div>
    </div>
    )
}
}

export default connect(null, {saveData})(Poop);