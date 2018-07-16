import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      content:''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    console.log(this.state);
    return (
    <div className="note-list">
      <div className="list-sidebar">
        <h1>Lambda Notes</h1>
        <NavLink to="/"><button className="sidebar-button">View Your Notes</button></NavLink>
        <NavLink to="/create"><button className="sidebar-button">+ Create New Note</button></NavLink>
      </div>
      <div className="right-bar">
        <h3 className="note-list-header">Create New Note: </h3>
        <form className="testing-form">
        <input className="title-input" name="title" placeholder="note title" value={this.state.title} onChange={this.handleChange}/>
        <br/>
        <input name="content" className="content-input" placeholder="Note Content" value={this.state.content} onChange={this.handleChange}/>
        <br/>
        <button className="sidebar-button" type="submit">Save</button>
        </form>
      </div>
    </div>
  )
  }
}

export default CreateNote;
