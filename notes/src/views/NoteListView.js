import React from 'react';
import {connect} from 'react-redux';
import {getNotes} from '../store/actions';
import NotesList from '../components/NotesList/NotesList';

class NoteListView extends React.Component {
    
    componentDidMount(){
        this.props.getNotes();
    }
    componentDidUpdate(){
        this.props.getNotes();
    }

    render() {
        return (
            <NotesList {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps, {getNotes})(NoteListView);