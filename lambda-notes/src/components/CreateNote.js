import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/noteActions';
import uuid from 'uuid';

class CreateNote extends Component {
    state = {
        title: '',
        content: ''
        };

    onSubmit = (e) => {
        e.preventDefalut();

        const { title, content }=this.state;

        const newNote = {
            id: uuid(),
            title,
            content
        };
        
        this.props.addNote(newNote);

          // Clear State
          this.setState({
            title: '',
            content: ''
          });

          this.props.history.push('/');
    }
       
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

  render() {
      const { title, content }= this.state;
    return (
      <div>
        <h1 className="page-title-heading"> Create Note</h1>
        <form onSubmit ={ this.onSubmit }>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input 
                type="text"
                name="title"
                value={ title }
                className="form-control form-control-lg"
                placeholder="Enter Title..."
                onChange={ this.onChange } 
            />
            </div>
            <textarea class="form-control" id="exampleFormControlTextarea1" value={ content } name="content" onChange={ this.onChange } placeholder="Enter Note..." rows="10"></textarea>
            <input type="submit" value="Save" className="btn btn-lg" style={{marginTop: '10px', background:'#1da1f2', color:'#fff', padding:'370 30px'}} />
            <input type="#" value="Cancel" className="btn btn-outline btn-lg" style={{marginTop: '10px', color:'#1da1f2', border: '1px solid #1da1f2', marginLeft:'10px'}} />
        </form>
      </div>
    )
  }
}

export default connect (null, { addNote })(CreateNote);