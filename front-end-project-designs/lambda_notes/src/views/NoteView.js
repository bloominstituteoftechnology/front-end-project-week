import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

import { getNote } from '../store/actions';

import Note from '../components/Note';

class NoteView extends React.Component {
    // constructor(){
    //     super();
    //     this.state={
    //         note:{}
    //     }
    // }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
    }

    render() {
        return (
          
            <div className="display-panel">
                {console.log(this.props.noteOnProps)}
                <h2 className="note-title">{this.props.noteOnProps.title}</h2>
                <p className="note-textBody">{this.props.noteOnProps.textBody}</p>

            </div>
            

            // <Note 
            //   {...this.props} 
            //   noteList={this.props.noteList} 
            //   isLoading={this.props.isLoading}
            //   handleDeleteNote={this.handleDeleteNote}
            //   goToUpdateNoteForm=    {this.goToUpdateNoteForm}
            // /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
        );
    }
}

const mapStateToProps = state => ({
    noteOnProps: state.note
});

export default connect(mapStateToProps, { getNote })(NoteView);
