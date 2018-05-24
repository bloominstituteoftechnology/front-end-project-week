import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import NotesContainer from "../NotesContainer/NotesContainer";
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div className="homeContainer">
                <Navigation />
                <NotesContainer cards={this.props.notes} />
            </div>
        )
    }
}

export default Home; 