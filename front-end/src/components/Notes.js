import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getNotes } from "../actions";

class Notes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <div>

            </div>
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
