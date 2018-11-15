import React, { Component } from 'react';
import {Modal, Paper} from './Styled';
import { getNote } from "../actions";
import { connect } from "react-redux";
import { FlexColumn } from "./Styled";

class NoteView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
    }

    render() {
        const { loading, error, note } = this.props;

        return (
            <Modal>
                <Paper>
                    {loading && <h4>Hang tight...</h4>}
                    {error && <><h1>Error</h1><p>{error}</p></>}
                    {note &&
                        <FlexColumn>
                            <h1>{note.title}</h1>
                            <p>{note.textBody}</p>
                        </FlexColumn>
                    }
                </Paper>
            </Modal>
        );
    }
};

NoteView.propTypes = {};

const mapStateToProps = ({loading, error, note}) => {
    return {
        loading,
        error,
        note
    }
};

export default connect(mapStateToProps, {getNote})(NoteView);
