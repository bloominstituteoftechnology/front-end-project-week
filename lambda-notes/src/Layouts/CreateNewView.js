import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import { Link } from 'react-router-dom';


class CreateNewView extends Component {
    state = {
      title: '',
      textBody: ''
    };
  
    onSubmit = (e) => {
      e.preventDefault();

      const { title, textBody } = this.state;

      const newNote = {
        title,
        textBody
      };
      
      this.props.addNote(newNote)
     
      // Clear State
      this.setState({
        title: '',
        textBody: ''
      });

      window.location.reload();
      this.props.history.push('/');
    };
  
    onChange = e => this.setState({ [e.target.name]: e.target.value });
  
    render() {
      const { title, textBody } = this.state;
    return (
      <div className>
        <h2 className="mb-4" style={{marginLeft:'19.36rem', paddingTop: '2.5rem'}}> Create New Note:</h2>
        <form onSubmit ={ this.onSubmit }>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                name="title"
                value={ title }
                className="form-control form-control-md"
                placeholder="Enter Title..."
                onChange={ this.onChange } 
            />
            </div>
            <textarea class="form-control for-control md" id="exampleFormControlTextarea1" value={ textBody } name="textBody" onChange={ this.onChange } placeholder="Enter Note..." rows="10"></textarea>
            <input type="submit" value="Save" className="btn btn-lg btn-primary" style={{marginTop: '10px', color:'#fff', padding:'370 30px'}} />
            <button className="btn btn-outline-primary btn-lg" style={{marginTop: '10px', marginLeft: '10px'}}><Link to="/">Cancel</Link></button>
        </form>
      </div>
    )
  }
}

export default connect (null, { addNote })(CreateNewView);