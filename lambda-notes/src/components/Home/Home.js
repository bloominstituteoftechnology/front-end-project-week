import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import NotesContainer from "../NotesContainer/NotesContainer";
import { getNotes } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Home.css";

class Home extends Component {

    componentWillMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <div className="homeContainer">
                <Navigation />
                <NotesContainer cards={this.props.notes} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            notes: state.notes
        }
    )
}

export default withRouter(connect(mapStateToProps, { getNotes })(Home)); 