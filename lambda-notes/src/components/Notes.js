import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Notes extends Component {
  

  render() {
    return <div className="col-sm-9 cards">
        <h4 className="your-notes">Your notes:</h4>
        <div className="notes-list" id="sortable">
          {this.props.notes.map(note => {
            return <Link to={`notes/${note.id}`} key={note.id} className='link-wrap'>
                <div className="card mb-sm-4 col-sm-3 ui-state-default" key={note.id}>
                  <div className="card-head no-bg">
                    <h5 className="d-sm-inline">
                      {note.title}
                    </h5>
                  </div>
                  <div className="list-group list-group-flush">
                    <p className="mt-sm-2">{note.content}</p>
                  </div>
                </div>
              </Link>;
          }).reverse()}
        </div>
      </div>;
  }
};

const mapStateToProps = state => {
  return {
    notes: state
  };
};


export default connect(mapStateToProps, { })(Notes);