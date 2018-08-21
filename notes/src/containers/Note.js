import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getNote } from '../actions';
import NavBar from '../components/NavBar';


 
class Note extends React.Component{
    componentWillMount(){
        this.props.getNote(this.props.match.params.id);
    }
    render(){
        return(
            <div className="Note">
                <NavBar />
                <div className="edit-delete">
                    <NavLink to="/edit" params={this.props.match.params.id}>edit</NavLink>
                    <NavLink to="/delete" params={this.props.match.params.id}>delete</NavLink>
                </div>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.textBody}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return (
        {
            getNote: state.noteReducer.getNote,
            note: state.noteReducer.note
        }
    )
}

export default connect(mapStateToProps, { getNote })(Note);