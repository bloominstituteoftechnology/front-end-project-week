import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNote } from "../actions";


class Note extends Component {

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);        
    }

    render() {
        return (
        <div className="col-sm-9 note-view">
            <div className='note-links-wrap'>
                <Link to='/edit' className='note-link'>edit</Link>
                <Link to='/' className='note-link'>delete</Link>
            </div>
            {/* <div> */}
                {/* Title: {this.props.note[0].title} */}
            {/* </div> */}
        </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    note: state
  };
};

export default connect(mapStateToProps, { getNote })(Note);

