import React, { Component } from 'react';

// Redux Imports
import { connect } from 'react-redux';

// Actions
import {
    fetchAllData
} from '../actions';

// Component
import Notes from '../components/Notes';

class NotesView extends Component {
    componentDidMount = () => {
        this.props.fetchAllData();
    }

    render(){
        return <Notes
            notes={this.props.notes}
        />
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllData: () => dispatch(fetchAllData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesView);