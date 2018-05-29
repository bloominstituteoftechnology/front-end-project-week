import React, { Component } from "react";
import "./CreateNote.css";
import Navigation from "../Navigation/Navigation";
import CreateNoteCard from "./CreateNoteCard";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreateNote extends Component {
    render() {
        return (
            <div className="createNoteContainer">
                <Navigation />
                <CreateNoteCard />
            </div>
        )
    }
}

export default withRouter(connect(null)(CreateNote))