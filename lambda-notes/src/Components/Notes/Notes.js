import React from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';
import { Link } from 'react-router-dom';

const styled = {
    textDecoration: 'none',
    color: 'black'
}

class Notes extends React.Component {
    componentDidMount() {
        console.log('props', this.props);
        this.props.getNotes();
    }

    render() {
        return (
            <div className="mainContent" >
                <div className="directory__title mainContent__title" >
                    Your Notes:
            </div>
                <div className="mainContent__content" >
                    {this.props.notes.map((note) => {
                        return (
                            <div key={note._id}> 
                            {/* access notes array and returns each note through Link */}
                                <Link to={'/notes/' + note._id} style={styled} >
                                    <Note title={note.title} body={note.textBody} id={note._id}/>
                                </Link>
                            </div>)
                    })}
                </div>
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.notes
    }
}

export default connect(stateProps, { getNotes })(Notes);