import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getNotes } from '../actions';

class Notes extends Component {
  
  
    render() {
      return (
        <div >
        {console.log(typeof this.state.notes)}
            {/* {this.props.notes.map(note => {
              return (
                <div>
                  {note.text}
                  {note.title}
                </div>
              );
            })} */}
        </div>
         
      );
      
    }
  }
  // Hey Redux?! Whatever is state in the store, could throw it on Props inside
  // this react component?
  const mapStateToProps = state => {
    
    return {
      notes: state.notesReducer.notes,
    };
};

export default connect(mapStateToProps, {
  
  })(Notes);
  