import React, {Component} from 'react';

import DeleteNoteModal from './DeleteNoteModal';

class DisplayNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            confirmDelete: false
        }
    }

    componentDidMount(){
        this.props.setCurrentNoteID(this.props.match.params.id);
    }

    editNote = ()=>{
        this.props.history.push(`/edit/${this.props.note._id}`);
    }

    confirmDelete = ()=>{
        this.setState({confirmDelete: true});
    }

    deleteNote = (deleteNote)=>{
        this.setState({confirmDelete: false});
        if(deleteNote){
            this.props.deleteNote(this.props.note._id);
            this.props.history.push('/');
        }
    }

    render(){
        if(!this.props.note){
            return <div>Loading data...</div>
        }
        
        return(
            <div>
                <button onClick={this.editNote}>edit</button>
                <button onClick={this.confirmDelete}>delete</button>
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.textBody}</p>
                {this.state.confirmDelete ? <DeleteNoteModal deleteNote={this.deleteNote}/> : null}
            </div>
        )
    }
}

export default DisplayNote;