import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class NotesList extends Component {
    state = {
        
    }
    componentWillMount() {
        let reversed = Array.from(this.props.notesArray).reverse();
        this.setState({notesArray: reversed });
    }
    
render() {
    return (
    <div className="notesList_container">
        <div><h3 className="content_header">Your Notes:</h3></div>
            <div className="notesList">
                {this.state.notesArray.map((note,index) => {
                  return(
                    <Link to={`/note/${note._id}`} className="unstiledlink" key={note._id}>
                    <div className="note">
                      <div>
                          <h4>{note.title}</h4>
                          <hr></hr>
                          <p>{note.body}</p>
                      </div>
                    </div>
                    </Link>
                  )  
                })}  
         </div>
    </div> 
    );       
}};


export default connect(mapStateToProps, {/*ActionsHere*/})(NotesList);

