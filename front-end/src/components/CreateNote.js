import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";
import { createNote, getNotes } from "../actions";
import { connect } from "react-redux";
import { Modal, Paper } from './Styles/Components';
import { FlexColumn, FlexRow, InputL, Input, TextArea, Button, Tag } from "./Styles/Components";

const TagContainer = styled(FlexRow)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
`;

class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            textBody: "",
            tags: []
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.createNote(this.state)
            .then(() => this.props.getNotes())
            .then(() => this.props.history.push("/"));
    };

    generateId = () => {
        return Math.floor(Math.random() * 1000000000);
    };

    handleClose = () => {
        this.props.history.push("/");
    };

    enterTags = e => {
        let tags = this.state.tags;
        if (e.keyCode === 32) {
            tags.push(e.target.value.trim());
            this.setState({ tags });
            e.target.value = this.offset();
        }
    };

    offset = () => {
        let tags = this.state.tags, length = 0, offset = "  ";
        for (let tag of tags) {
            offset += "   ";
            length += tag.length;
        }

        for (let i = 0; i < length + tags.length; i++) {
            offset += "  ";
        }

        return offset;
    };

    removeTag = i => {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({ tags: tags });
    };

    render() {
        const { loading, error } = this.props,
            { textBody, title, tags } = this.state;


        return (
            <Modal>
                <Paper width="70%">
                    {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    <FlexColumn>
                        <form onSubmit={this.handleSubmit} style={{ width: "100%" }}>
                            <FlexColumn width="full" alignEnd>
                                <InputL placeholder="Title goes here" value={title}
                                        onChange={e => this.setState({ title: e.target.value })}/>
                                <TextArea placeholder="Start typing your note here..." value={textBody}
                                          onChange={e => this.setState({ textBody: e.target.value })}/>
                                <FlexRow width="full" style={{ position: "relative", marginBottom: "40px" }}>
                                    <TagContainer width="full-width">
                                        {!!tags.length && tags.map((tag, i) => <Tag key={i}
                                                                                    onClick={() => this.removeTag(i)}
                                                                                    style={{ margin: "0 10px 0 0" }}>{tag}</Tag>)}
                                    </TagContainer>

                                    <Input placeholder={!!tags.length ? "" : "Enter tags here"}
                                           onKeyUp={e => this.enterTags(e)}/>
                                </FlexRow>

                                <FlexRow width="full" justifyEnd>
                                    <Button onClick={this.handleClose} border
                                            style={{ marginRight: "10px" }}>CANCEL</Button>
                                    <Button primary type="submit">CREATE</Button>
                                </FlexRow>
                            </FlexColumn>
                        </form>
                    </FlexColumn>
                </Paper>
            </Modal>
        );
    }
}

CreateNote.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool
};

const mapStateToProps = ({ loading, error }) => {
    return {
        loading,
        error
    };
};

export default connect(mapStateToProps, { createNote, getNotes })(withRouter(CreateNote));
