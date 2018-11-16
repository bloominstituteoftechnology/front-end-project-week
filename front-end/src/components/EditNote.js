import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Modal, Paper} from './Styled';
import {getNote, editNote, getNotes} from "../actions";
import {connect} from "react-redux";
import {FlexColumn, FlexRow, Input, TextArea, Button} from "./Styled";

class NoteEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.note && nextProps.note._id !== this.state._id) {
            this.setState(nextProps.note);
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const {_id, textBody, title} = this.state,
            update = {textBody, title};

        this.props.editNote(_id, update)
            .then(() => this.props.getNotes())
            .then(() => this.props.history.push("/"));
    };

    handleClose = () => {
        this.props.history.push("/")
    };

    render() {
        const {loading, error, note} = this.props;
        const {title, textBody, _id} = this.state;

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
                                <TextArea value={textBody} onChange={e => this.setState({textBody: e.target.value})}/>

                                <FlexRow width="full" justifyEnd>
                                    <Button onClick={this.handleClose} border style={{marginRight: "10px"}}>CANCEL</Button>
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

NoteEdit.propTypes = {};

const mapStateToProps = ({loading, error, note}) => {
    return {
        loading,
        error,
        note
    }
};

export default connect(mapStateToProps, {getNote, editNote, getNotes})(withRouter(NoteEdit));
