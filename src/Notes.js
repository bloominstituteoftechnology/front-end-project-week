import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from './actions/index';
import Note from './Note';


class Notes extends React.Component {
    componentDidMount(){
        this.props.getNotes();
    }

    render(){
        console.log(this.props.notes)
        return(
            <div>
                {this.props.notes.map( note => 
                    < Note note={note} key={note._id} id={note._id} text={note.textBody} title={note.title} /> 
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