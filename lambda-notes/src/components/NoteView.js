import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import EditNote from './EditNote';
import DeleteView from './DeleteView';
import '../App.css';

class NoteView extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            textBody: '',
            _id: '',
            deleteView: false
        }
    }

    componentDidMount() {
        if(this.props.notes.length){
            console.log('noteView - note', this.props.notes);
            const noteVar = this.props.notes.find(note => note._id == this.props.match.params._id);
            this.setState({
                title: noteVar.title,
                textBody: noteVar.textBody,
                _id: noteVar._id
            })
        }
    }

    toggleDeleteView = () => {
        let toggle = this.state.deleteView;
        if(toggle === true){
            toggle = false
        } else {
            toggle = true;
        }
        this.setState({
          deleteView: toggle
        })
    }


    render(){
        if(!this.props.notes.length) {
            return <h1>Loading...</h1>
        }
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
                    <div onClick={this.toggleDeleteView} className="edit-delete">delete</div>
                </div>
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>

                </div> } />

                <Route
                exact
                path="/get/:_id/edit" 
                render={props =>  <EditNote {...props} title={this.state.title} textBody={this.state.textBody} _id={this.state._id} editNote={this.props.editNote} /> } />

                {this.state.deleteView && <DeleteView toggleDeleteView={this.toggleDeleteView} deleteNote={this.props.deleteNote} _id={this.state._id} history={this.props.history}/>}

            </div>
        );
    }
}

export default NoteView;