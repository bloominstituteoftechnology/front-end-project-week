import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {loadNotes, createNotes, deleteNote, editNote } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
     title: '',
     body: '',
     changeTitle: '',
     changeBody: '',
     toggleForm: false
  };

  updateHandler = e => {
    this.setState({[e.target.title]: e.target.value});
  }

  toggleHandler = () => {
    this.setState({ toggleForm: !this.state.toggleForm });
  };

  componentDidMount() {
    this.props.loadNotes();
  }
    
  render() {
    return (
      <div className='App'>
        <h1 className= 'title'>Lambda Notes
        <p><button className='viewNotes' type='submit'> View Your Notes </button></p>
        <p><button className='createNotes' type='submit'> + Create New Note </button></p>
        </h1>
        <h1 className= 'yourNotes'>Your Notes:</h1>
        {this.props.fetching ? (
          <div>Loading Notes</div>
        ) : (
          <ul className='Notes'>
            {this.props.notes.map(note => {
              return (
                <div>
                  <div className='NoteId'>
                    <div>{note.title}</div>
                    <div>{note.body}</div>
                  </div>
                  <button onClick={() => this.props.deleteNote(note.id)}>
                    Delete Note{' '}
                  </button>
                  <button onClick={this.toggleHandler}>Edit Note</button>
                  {this.state.toggleForm ? (
                    <form className='Input' onSubmit={e => {
                        e.preventDefault();
                        this.props.editNote(note.id, {
                          title: this.state.changeTitle,
                          body: this.state.changeBody                    
                        });
                        this.setState({ title: '' });
                      }}>
                      <input type='text' placeholder='title' title='changeTitle' value={this.state.changeTitle} onChange={this.updateHandler} />
                      <input type='text' placeholder='body' title='changeBody' value={this.state.changeBody} onChange={this.updateHandler} />
                      <button type='submit'>Edit</button>
                    </form>
                  ) : null}
                  <hr />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    notes: state.notes,
    loading: state.loadNotes,
    error: state.error
  };
};


export default connect ( mapDispatchToProps, { loadNotes, createNotes, deleteNote, editNote }) (App);
