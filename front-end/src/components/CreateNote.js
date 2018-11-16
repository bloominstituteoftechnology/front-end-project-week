import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import {createNote, getNotes} from "../actions";
import {connect} from "react-redux";
import {Modal, Paper} from './Styled';
import {FlexColumn, FlexRow, Input, TextArea, Button} from "./Styled";

class CreateNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            textBody: "",
            tags: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.createNote(this.state)
            .then(() => this.props.getNotes())
            .then(() => this.props.history.push("/"));
    };

    handleClose = () => {
        this.props.history.push("/")
    };

    render() {
        const {loading, error} = this.props,
            {textBody, title} = this.state;


        return (
            <Modal>
                <Paper width="70%">
                    {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    <FlexColumn>
                        <form onSubmit={this.handleSubmit} style={{width: "100%"}}>
                            <FlexColumn width="full" alignEnd>
                                <Input placeholder="Title goes here" value={title} onChange={e => this.setState({title: e.target.value})}/>
                                <TextArea placeholder="Start typing your note here..." value={textBody} onChange={e => this.setState({textBody: e.target.value})}/>

                                <FlexRow width="full" justifyEnd>
                                    <Button onClick={this.handleClose} border style={{marginRight: "10px"}}>CANCEL</Button>
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

CreateNote.propTypes = {};

const mapStateToProps = ({loading, error}) => {
    return {
        loading,
        error
    }
};

export default connect(mapStateToProps, {createNote, getNotes})(withRouter(CreateNote));
