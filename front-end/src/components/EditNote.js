import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import {Modal, Paper} from './Styles/Components';
import {getNote, editNote, getNotes} from "../actions";
import {connect} from "react-redux";
import {FlexColumn, FlexRow, Input, TextArea, Button} from "./Styles/Components";

class NoteEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.note && nextProps.note.id !== this.state.id) {
            this.setState(nextProps.note);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {id, textBody, title} = this.state,
            update = {textBody, title};

        this.props.editNote(id, update)
            .then(() => this.props.getNotes())
            .then(() => this.props.history.push("/"));
    };

    handleClose = () => {
        this.props.history.push("/")
    };

    render() {
        const {loading, error, note} = this.props;
        const {title, textBody, id} = this.state;

        return (
            <Modal>
                <Paper width="70%">
                    {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    {note &&
                    <FlexColumn>
                        <form onSubmit={this.handleSubmit} style={{width: "100%"}}>
                            <FlexColumn width="full">
                                <Input value={title} onChange={e => this.setState({title: e.target.value})}/>
                                <TextArea value={textBody} onChange={e => this.setState({textBody: e.target.value})}
                                          style={{marginBottom: "40px"}}/>

                                <FlexRow width="full" justifyEnd>
                                    <Button onClick={this.handleClose} border
                                            style={{marginRight: "10px"}}>CANCEL</Button>
                                    <Button primary type="submit">UPDATE</Button>
                                </FlexRow>
                            </FlexColumn>
                        </form>
                    </FlexColumn>
                    }
                </Paper>
            </Modal>
        );
    }
};

NoteEdit.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    note: PropTypes.shape({
        title: PropTypes.string,
        textBody: PropTypes.string
    })
};

const mapStateToProps = ({loading, error, note}) => {
    return {
        loading,
        error,
        note
    }
};

export default connect(mapStateToProps, {getNote, editNote, getNotes})(withRouter(NoteEdit));
