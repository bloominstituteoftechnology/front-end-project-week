import React, { Component } from 'react';
import { connect } from 'react-redux';


import { getNote } from '../Action';

// const id=this.props.match.params.id;

class Note extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }

    render() {
        return (
            <div> {this.props.note.title} </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        note: state.note,
    }
}

export default connect(mapStateToProps, { getNote })(Note);