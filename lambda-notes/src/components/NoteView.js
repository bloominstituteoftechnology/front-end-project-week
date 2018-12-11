import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import EditNote from './EditNote';
import '../App.css';

class NoteView extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            textBody: '',
            _id: ''
        }
    }

    componentDidMount() {
        console.log('noteView - note', this.props.notes);
        const noteVar = this.props.notes.find(note => note._id == this.props.match.params._id);
        this.setState({
            title: noteVar.title,
            textBody: noteVar.textBody,
            _id: noteVar._id
        })
    }


    render(){
        console.log('test 2', this.props.notes);
        return (
            <div className="note-view">

                <Route 
                exact
                path="/get/:_id" 
                render={props => <div 
                {...props}>
                <div className="edit-delete-container">
                    <NavLink className="edit-delete" to={`/get/${this.state._id}/edit`}>edit</NavLink>
                    <NavLink className="edit-delete" to="/delete">delete</NavLink>
                </div>
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>

                </div> } />

                <Route
                exact
                path="/get/:_id/edit" 
                render={props =>  <EditNote {...props} title={this.state.title} textBody={this.state.textBody} _id={this.state._id} editNote={this.props.editNote} /> } />

                <Route 
                path="/delete" 
                render={props => <div {...props} /> } />
            </div>
        );
    }
}

export default NoteView;