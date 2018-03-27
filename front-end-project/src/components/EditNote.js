import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateNote.css';
import { NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { editNote } from '../actions';

class EditNote extends Component {
	componentWillMount() {
	this.setState({title: this.props.title, meat: this.props.meat, id: this.props.id}); }
  state = {
  title: '',
  meat: '',
  redirect: false,
  //  title: this.props.id,
  //  oldtitle: this.props.id,
  //  meat: this.props.notes[this.props.id].meat, 
	//	redirect: false,
  };
  render() {
    return (
      <div className="Home__Right">
        <div className="Right__Containers">
          <div className="CreateNote__Text">
            Edit Note:
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
              <b>Update</b>
            </div>
          </NavLink>
          {this.state.redirect && <Redirect to="/viewnotes" />}
        </div>
      </div>
    )
  }

  doChange = (event) => { // event is that current form (textarea)
    event.preventDefault(); // stop default action of component
    this.setState(
      { [event.target.name]: event.target.value } // like Object.assign..
    )  // adds the event.target.name (eg: title) property of the state to equal the new value
       // this doesn't overwrite state, but overwrites the specified [] value
  }
  doSubmit = (event) => {
    event.preventDefault(); // stop default action of component
    this.props.editNote(this.state);
    this.setState( // reset the state
				{ title: '', meat: '', redirect: true, }
				// { title: '', meat: '', oldtitle: '', redirect: true, }
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state
		//  notes: state.notes,
  };
};

export default connect(mapStateToProps, { editNote })(EditNote);
