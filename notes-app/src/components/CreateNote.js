import React, { Component } from 'react';
import './CreateNote.css';
import { NavLink } from 'react-router-dom';

class CreateNote extends Component {
  state = {
    title: '',
    meat: '',
    redirect: false,
  };
  render() {
    return (
      <div className="Home__Right">
        <div className="Right_Containers">
          <div className="CreateNote__Text">
            Create New Note:
          </div>
          <div className="CreateNote__Title">
            <textarea
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            rows="1"
            cols="55"
            onChange={this.doChange}
            />
          </div>
          <div className="CreateNote__Content">
            <textarea
            name="meat"
            placeholder="Note Content"
            value={this.state.meat}
            rows="18"
            cols="75"
            onChange={this.doChange}
            />
          </div>
          <NavLink activeClassName='NavButton' to='/viewnotes'>
            <div className="button CreateNote__Save" onClick={this.doSubmit}>
              <b>Save</b>
            </div>
          </NavLink>
        </div>
      </div>
    )
  }

  doChange = (event) => { // event is that current form (textarea)
    event.preventDefault(); // stop default action of component
    this.setState(
      { [event.target.name]: event.target.value }
    )
    console.log(this.state);
  }
  doSubmit = (event) => {
    event.preventDefault(); // stop default action of component

    this.setState(
      { title: '', meat: '', redirect: true, }
    );
    console.log(this.state);
  }
}

export default CreateNote;
