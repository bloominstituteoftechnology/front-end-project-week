import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNote } from "../actions";


class Note extends Component {

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);        
    }

    // handleNote = () => {
    //     this.props.getNote(this.props.match.params.id);
    // }
    // this.props.getNote(this.props.match.params.id)
    render() {
        // this.handleNote
        console.log(this.props);
        return (
        <div className="col-sm-9 cards">
            Title: {this.props.note[0].title}
        </div>
        )
    }
}
// const note = this.props.getNote()
// this.props.getNote();

const mapStateToProps = state => {
  return {
    note: state
  };
};

export default connect(mapStateToProps, { getNote })(Note);

