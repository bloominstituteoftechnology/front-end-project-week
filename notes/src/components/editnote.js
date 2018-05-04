import React from "react";

import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Col, Row, Form, FormGroup, Input } from "reactstrap";

import styled from "styled-components";

import { editNote } from "../actions/notesActions";

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

const Btn = styled.button`
    width: 33%;
`;

class EditNote extends React.Component {
    state = {
        Redirect: false,
        Fields: {
            title: "",
            content: "",
        },
        id: 0,
    };

    render() {
        return (
            <Col xs="9">
                {this.state.Redirect ? <Redirect to={"/"} /> : null}
                <Row>
                    <Col>
                        <Form className="mr-4 ml-3" onSubmit={this.handleSubmit}>
                            <H3>Edit Note:</H3>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.title}
                                    name="title"
                                    type="text"
                                    className="form-control"
                                    placeholder="Note Title"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    onChange={this.handleInputChange}
                                    value={this.state.Fields.content}
                                    name="content"
                                    type="textarea"
                                    className="form-control"
                                    placeholder="Note Content"
                                    rows="15"
                                />
                            </FormGroup>
                            <Btn className="Button btn btn-primary btn-block" type="submit">
                                Save
                            </Btn>
                        </Form>
                    </Col>
                </Row>
            </Col>
        );
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({ Fields: fields });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Fields.title && this.state.Fields.content) {
            this.props.editNote(this.props.user.id, this.state.id, this.state.Fields);
            this.setState({
                Redirect: true,
                Fields: {
                    title: "",
                    content: "",
                },
            });
        }
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        const notes = this.props.notes;
        console.log("notes", this.props);
        const note = notes.find(note => note._id.toString() === id.toString());
        console.log("the note", note);
        const fields = {
            title: note.title,
            content: note.content,
        };
        this.setState({ Fields: fields, id });
    }
}

const mapStateToProps = state => {
    return state;
};

export default withRouter(connect(mapStateToProps, { editNote })(EditNote));
