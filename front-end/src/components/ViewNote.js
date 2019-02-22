import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";
import {Modal, Paper} from './Styles/Components';
import {getNote, deleteNote} from "../actions";
import {connect} from "react-redux";
import {FlexColumn, FlexRow, Title, Text, Button} from "./Styles/Components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class NoteView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.id);
    };

    handleClose = () => {
        this.props.history.push("/")
    };

    render() {
        const {loading, error, note} = this.props;

        return (
            <Modal>
                <Paper width="70%">
                    {loading && <><Modal><h1>LOADING...</h1></Modal></>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    {note &&
                    <FlexColumn>
                        <Title color="#2b2b2b">{note.title}</Title>
                        <Text>{note.textBody}</Text>

                        <FlexRow width="full" justifyEnd>
                            <Link to="/" onClick={this.handleDelete} style={{fontSize: "1.2rem", marginRight: "10px"}}>
                                <Button border>DELETE</Button>
                            </Link>
                            <Button onClick={this.handleClose} border style={{marginRight: "10px"}}>CLOSE</Button>
                            <Link to={`/edit/${note.id}`}>
                                <Button primary border>EDIT</Button>
                            </Link>
                        </FlexRow>
                    </FlexColumn>
                    }
                </Paper>
            </Modal>
        );
    }
};

NoteView.propTypes = {
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

export default connect(mapStateToProps, {getNote, deleteNote})(withRouter(NoteView));
