import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import DragSortableList from "react-drag-sortable";

import { Row, Col, Card, CardTitle, CardText } from "reactstrap";

import { getNotes } from "../actions";

import styled from "styled-components";

import "./notes.css";

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: Raleway Regular;
    opacity: 0.8;
`;

const Form = styled.form`
    display: flex;
    justify-content: flex-end;
`;

const Input = styled.input`
    margin-top: 41px;
    text-align: center;
    padding: 1%;
`;

class Notes extends React.Component {
    state = {
        searchQuery: "",
    };

    componentDidMount() {
        this.props.getNotes(this.props.user.id);
    }

    handleSearch = event => {
        this.setState({ searchQuery: event.target.value });
    };
    render() {
        const noteSearch = this.props.notes.filter(note => {
            return (
                note.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 ||
                note.content.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            );
        });
        return (
            <Col xs="9" className="mb-5 pb-5 pl-5 pr-5 ">
                <Row>
                    <Col xs="6">
                        <H3>Your Notes:</H3>
                    </Col>
                    <Col xs="6">
                        <Form>
                            <Input type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.handleSearch} />
                        </Form>
                    </Col>
                </Row>

                <Row className="mb-5">
                    {noteSearch.map(note => (
                        <Col className="mb-4 pl-2 pr-2" xs="4" key={`${note._id} ${note.title}`}>
                            <Link className="Card__Link" to={`/note/${note._id}`}>
                                <Card className="Notes__Note" body>
                                    <CardTitle className=" Note_Title pb-2 border-bottom border-secondary">{note.title}</CardTitle>
                                    <CardText className="Note__Content">{note.content}</CardText>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default withRouter(connect(mapStateToProps, { getNotes })(Notes));
