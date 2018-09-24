import React from 'react';
import { connect } from 'react-redux';

import { getNoteList } from '../store/actions';

import NoteList from '../components/NoteList';

class NoteListView extends React.Component {
    componentDidMount() {
        this.props.getNoteList();
    }


    render() {
        return (
            
            <div className="">
                <NoteList {...this.props} />
                <h1>NoteListview</h1>

            </div>
            
        );
    }
}

const mapStateToProps = state => ({
    noteList: state.notes
});

export default connect(mapStateToProps, { getNoteList })(
    NoteListView);