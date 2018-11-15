import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getNotes } from "../actions";
import { FlexColumn } from "./Styled";

class Notes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        const { loading, error, notes } = this.props;

        return (
            <FlexColumn>
                {loading && <h1>LOADING...</h1>}
                {error && <><h1>Error</h1><p>{error}</p></>}
                {notes && notes.map(note => {
                    return <div>{note.textBody}</div>
                })}
            </FlexColumn>
        );
    }
}

Notes.propTypes = {};

const mapStateToProps = ({ loading, error, notes }) => {
    return {
        loading,
        error,
        notes
    }
};

export default connect(mapStateToProps, { getNotes })(Notes);
