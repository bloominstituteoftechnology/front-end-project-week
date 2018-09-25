import React from 'react';
import { connect } from 'react-redux';

import { getNoteList } from '../store/actions';

import NoteList from '../components/NoteList.js';

class NoteListView extends React.Component {
    componentDidMount() {
        this.props.getNoteList();
    }

    render() {
        return ( 
            <div className="notelist-view-container">
                <NoteList {...this.props}/>               
            </div>     
        );
    }
}

const mapStateToProps = state => ({
    noteList: state.notes
});

export default connect(mapStateToProps, { getNoteList })(NoteListView);
