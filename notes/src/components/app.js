import React, { Component } from "react";

import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { Container, Row } from "reactstrap";

import { getNotes } from "../actions";
import Login from "./login";
import Register from "./register";
import NewNote from "./newnote";
import Note from "./note";
import Notes from "./notes";
import EditNote from "./editnote";
import NavBar from "./navbar";
import "./app.css";

class App extends Component {
    render() {
        return (
            <Container className="Container">
                <Row className="Background">
                    <NavBar />
                    <Route exact path="/" />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/notes" component={Notes} />
                    <Route path="/newnote" component={NewNote} />
                    <Route exact path="/note/:id" component={Note} />
                    <Route path="/note/edit/:id" component={EditNote} />
                </Row>
            </Container>
        );
    }

    componentDidMount() {
        this.props.getNotes();
    }
}

const mapStateToProps = ({ notes }) => {
    return {
        notes,
    };
};

export default withRouter(connect(mapStateToProps, { getNotes })(App));
