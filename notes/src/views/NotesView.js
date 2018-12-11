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
        if(this.props.notes){
            return <Notes notes={this.props.notes} />
        } else if (this.props.error){
            return <h1>No note found...</h1>
        } else {
            return <h1>Loading note...</h1>
        }
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