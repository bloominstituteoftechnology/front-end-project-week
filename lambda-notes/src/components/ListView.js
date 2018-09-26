import React from "react";

// Auxillary Packages
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotes } from "../actions";

// Components
import ListItem from "./ListItem";

// CSS
import "../CSS/ListView.css";

// Images
import clippy from '../Images/clippy.jpg';

class ListView extends React.Component {
  state = {
    term: '',
  }

  componentDidMount() {
    this.props.getNotes();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { term } = this.state;
    return (
      this.props.isFetching ? 
      <img src={clippy} alt="clippy"/>
      :
      <div>
        <div className="filter-results-container">
          <h2 className="filter-results-container-title">Filter Notes</h2>
          <input placeholder="Search by note title or text body..." className="filter-results-container-input" type="text" name="term" onChange={this.handleChange} />
        </div>
        <h2 className="text-center">Your Notes: </h2>
        <div
          className="note-card-container"
          style={
            this.props.notes.length < 15
              ? { height: "100vh" }
              : { height: "100%" }
          }
        >
          {this.props.notes.filter((note) => {
            if(term.trim()) {
              if(note.title.toLowerCase().includes(term.toLowerCase()) || note.textBody.toLowerCase().includes(term.toLowerCase())) {
                return note;
              }
            } else {
              return note;
            }
          }).map(note => {
            return <ListItem note={note} key={note._id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetched: state.fetched,
    isFetching: state.isFetching,
    error: state.error,
    updated: state.updated,
    deleted: state.deleted
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes }
  )(ListView)
);
