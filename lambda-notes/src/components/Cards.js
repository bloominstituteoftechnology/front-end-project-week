import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes, createNote } from "../actions";



class Cards extends Component {
  
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
      console.log(this.props)
    return (

    <div className="col-sm-9 cards">
        <h4 className="your-notes">Your notes:</h4>
        {this.props.notes.map(note => {
            return (
            <div className="card mb-sm-4 col-sm-3" key={note.id}>
          <div className="card-header no-bg">
            <h5 className="d-sm-inline">{note.title}</h5>
          </div>
          <div className="list-group list-group-flush">
            <p className="mt-sm-2">
              {note.context}
            </p>
          </div>
        </div>
            )
        })}

        
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    notes: state
  };
};


export default connect(mapStateToProps, { fetchNotes})(Cards);