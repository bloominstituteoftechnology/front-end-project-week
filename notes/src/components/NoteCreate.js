import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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
  saveData = () => {
    const poo = { text: this.state.text, title: this.state.title };
    axios
    .post(`http://localhost:5000/notes`, poo) //Poo is the perfect crux for my entire project hahahah
    .then(savedData => {
      console.log(savedData);
    })
    .catch(error => {
      console.log(error);
    });
    this.setState({ text: '', title: ''});
  };
  render() {
    return (
      <div>
      <div className="columnCenter">  <form>
        <div className="columnA">
            <span className="titleNew">  </span>
              <input className="centerText" type="text" name="title" onChange={this.handleTextChange} placeholder="Title Here" />              
              <input className="centerText" type="text" name="text" onChange={this.handleTextChange} placeholder="Text Here" />
            <Link to="/"><button type="submit" value="Submit" onClick={this.saveData}>Submit Friend</button></Link>
          </div>
          </form>
          </div>
    </div>
    )
}
}

export default Poop;