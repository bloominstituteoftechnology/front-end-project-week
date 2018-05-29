import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import EditNoteCard from "./EditNoteCard";
import { getSingleNote } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./EditNote.css";

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
        }
    }

    componentWillMount() {
        this.props.getSingleNote(this.props.match.params.id)
        this.setState({ id: this.props.match.params.id })
    }

    ComponentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.props.getSingleNote(newProps.match.params.id)
            this.setState({ id: this.props.match.params.id })
        }
    }

    render() {
        if (!this.props.note) {
            return <div>Loading note information...</div>
        }
        return (
            <div className="editNoteContainer">
                <Navigation />
                <EditNoteCard id={this.state.id} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            note: state.note,
        }
    )
}

export default withRouter(connect(mapStateToProps, { getSingleNote })(EditNote))