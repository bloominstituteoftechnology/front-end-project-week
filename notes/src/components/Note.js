import React, { Component } from "react";
import { connect } from "react-redux";

class Note extends Component {
    constructor() {
        super();
    }

    render() {
        const { title, textBody } = this.props.note
        return (
            <div className="note-card">
                <div className="note-title">{title}</div>
                <div className="note-body">{textBody}</div>
            </div>
        )
    }
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Note);