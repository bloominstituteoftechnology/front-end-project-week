import React from 'react';
import { connect } from 'react-redux';

import NotesList from '../components/NotesList/NotesList';

class NotesListView extends React.Component {
     
    componentDidMount() {
        this.props.notesList;
    }

    

    render() {
        return (
            <div>
            <NotesList 
            
            {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes
});

export default connect(mapStateToProps)(NotesListView);