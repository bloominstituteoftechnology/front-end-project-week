import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions/index';
import Note from './Note';


class Notes extends React.Component {
    componentDidMount(){
        this.props.getNotes();
    }

    render(){
        return(
            <div>
                {this.props.notes.map( note => 
                    < Note note={note} key={note.textBody} /> 
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getNotes })(Notes);